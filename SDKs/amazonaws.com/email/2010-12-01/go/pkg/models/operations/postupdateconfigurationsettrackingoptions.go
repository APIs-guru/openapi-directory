package operations

type PostUpdateConfigurationSetTrackingOptionsActionEnum string

const (
	PostUpdateConfigurationSetTrackingOptionsActionEnumUpdateConfigurationSetTrackingOptions PostUpdateConfigurationSetTrackingOptionsActionEnum = "UpdateConfigurationSetTrackingOptions"
)

type PostUpdateConfigurationSetTrackingOptionsVersionEnum string

const (
	PostUpdateConfigurationSetTrackingOptionsVersionEnumTwoThousandAndTen1201 PostUpdateConfigurationSetTrackingOptionsVersionEnum = "2010-12-01"
)

type PostUpdateConfigurationSetTrackingOptionsQueryParams struct {
	Action  PostUpdateConfigurationSetTrackingOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateConfigurationSetTrackingOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateConfigurationSetTrackingOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateConfigurationSetTrackingOptionsRequest struct {
	QueryParams PostUpdateConfigurationSetTrackingOptionsQueryParams
	Headers     PostUpdateConfigurationSetTrackingOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateConfigurationSetTrackingOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
