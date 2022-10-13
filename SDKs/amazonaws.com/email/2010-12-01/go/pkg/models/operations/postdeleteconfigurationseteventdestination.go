package operations

type PostDeleteConfigurationSetEventDestinationActionEnum string

const (
	PostDeleteConfigurationSetEventDestinationActionEnumDeleteConfigurationSetEventDestination PostDeleteConfigurationSetEventDestinationActionEnum = "DeleteConfigurationSetEventDestination"
)

type PostDeleteConfigurationSetEventDestinationVersionEnum string

const (
	PostDeleteConfigurationSetEventDestinationVersionEnumTwoThousandAndTen1201 PostDeleteConfigurationSetEventDestinationVersionEnum = "2010-12-01"
)

type PostDeleteConfigurationSetEventDestinationQueryParams struct {
	Action  PostDeleteConfigurationSetEventDestinationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteConfigurationSetEventDestinationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteConfigurationSetEventDestinationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteConfigurationSetEventDestinationRequest struct {
	QueryParams PostDeleteConfigurationSetEventDestinationQueryParams
	Headers     PostDeleteConfigurationSetEventDestinationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteConfigurationSetEventDestinationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
