package operations

type GetUpdateConfigurationSetTrackingOptionsActionEnum string

const (
	GetUpdateConfigurationSetTrackingOptionsActionEnumUpdateConfigurationSetTrackingOptions GetUpdateConfigurationSetTrackingOptionsActionEnum = "UpdateConfigurationSetTrackingOptions"
)

type GetUpdateConfigurationSetTrackingOptionsTrackingOptions struct {
	CustomRedirectDomain *string `queryParam:"name=CustomRedirectDomain"`
}

type GetUpdateConfigurationSetTrackingOptionsVersionEnum string

const (
	GetUpdateConfigurationSetTrackingOptionsVersionEnumTwoThousandAndTen1201 GetUpdateConfigurationSetTrackingOptionsVersionEnum = "2010-12-01"
)

type GetUpdateConfigurationSetTrackingOptionsQueryParams struct {
	Action               GetUpdateConfigurationSetTrackingOptionsActionEnum      `queryParam:"style=form,explode=true,name=Action"`
	ConfigurationSetName string                                                  `queryParam:"style=form,explode=true,name=ConfigurationSetName"`
	TrackingOptions      GetUpdateConfigurationSetTrackingOptionsTrackingOptions `queryParam:"style=form,explode=true,name=TrackingOptions"`
	Version              GetUpdateConfigurationSetTrackingOptionsVersionEnum     `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateConfigurationSetTrackingOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUpdateConfigurationSetTrackingOptionsRequest struct {
	QueryParams GetUpdateConfigurationSetTrackingOptionsQueryParams
	Headers     GetUpdateConfigurationSetTrackingOptionsHeaders
}

type GetUpdateConfigurationSetTrackingOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
