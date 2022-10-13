package operations

type PostCreateConfigurationSetEventDestinationActionEnum string

const (
	PostCreateConfigurationSetEventDestinationActionEnumCreateConfigurationSetEventDestination PostCreateConfigurationSetEventDestinationActionEnum = "CreateConfigurationSetEventDestination"
)

type PostCreateConfigurationSetEventDestinationVersionEnum string

const (
	PostCreateConfigurationSetEventDestinationVersionEnumTwoThousandAndTen1201 PostCreateConfigurationSetEventDestinationVersionEnum = "2010-12-01"
)

type PostCreateConfigurationSetEventDestinationQueryParams struct {
	Action  PostCreateConfigurationSetEventDestinationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateConfigurationSetEventDestinationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateConfigurationSetEventDestinationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateConfigurationSetEventDestinationRequest struct {
	QueryParams PostCreateConfigurationSetEventDestinationQueryParams
	Headers     PostCreateConfigurationSetEventDestinationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateConfigurationSetEventDestinationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
