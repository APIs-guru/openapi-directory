package operations

type PostDeleteConfigurationSetTrackingOptionsActionEnum string

const (
	PostDeleteConfigurationSetTrackingOptionsActionEnumDeleteConfigurationSetTrackingOptions PostDeleteConfigurationSetTrackingOptionsActionEnum = "DeleteConfigurationSetTrackingOptions"
)

type PostDeleteConfigurationSetTrackingOptionsVersionEnum string

const (
	PostDeleteConfigurationSetTrackingOptionsVersionEnumTwoThousandAndTen1201 PostDeleteConfigurationSetTrackingOptionsVersionEnum = "2010-12-01"
)

type PostDeleteConfigurationSetTrackingOptionsQueryParams struct {
	Action  PostDeleteConfigurationSetTrackingOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteConfigurationSetTrackingOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteConfigurationSetTrackingOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteConfigurationSetTrackingOptionsRequest struct {
	QueryParams PostDeleteConfigurationSetTrackingOptionsQueryParams
	Headers     PostDeleteConfigurationSetTrackingOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteConfigurationSetTrackingOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
