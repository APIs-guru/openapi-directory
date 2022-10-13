package operations

type GetDeleteConfigurationSetTrackingOptionsActionEnum string

const (
	GetDeleteConfigurationSetTrackingOptionsActionEnumDeleteConfigurationSetTrackingOptions GetDeleteConfigurationSetTrackingOptionsActionEnum = "DeleteConfigurationSetTrackingOptions"
)

type GetDeleteConfigurationSetTrackingOptionsVersionEnum string

const (
	GetDeleteConfigurationSetTrackingOptionsVersionEnumTwoThousandAndTen1201 GetDeleteConfigurationSetTrackingOptionsVersionEnum = "2010-12-01"
)

type GetDeleteConfigurationSetTrackingOptionsQueryParams struct {
	Action               GetDeleteConfigurationSetTrackingOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ConfigurationSetName string                                              `queryParam:"style=form,explode=true,name=ConfigurationSetName"`
	Version              GetDeleteConfigurationSetTrackingOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteConfigurationSetTrackingOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteConfigurationSetTrackingOptionsRequest struct {
	QueryParams GetDeleteConfigurationSetTrackingOptionsQueryParams
	Headers     GetDeleteConfigurationSetTrackingOptionsHeaders
}

type GetDeleteConfigurationSetTrackingOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
