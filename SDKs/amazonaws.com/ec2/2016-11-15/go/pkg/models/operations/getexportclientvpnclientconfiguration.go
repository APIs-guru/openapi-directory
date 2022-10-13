package operations

type GetExportClientVpnClientConfigurationActionEnum string

const (
	GetExportClientVpnClientConfigurationActionEnumExportClientVpnClientConfiguration GetExportClientVpnClientConfigurationActionEnum = "ExportClientVpnClientConfiguration"
)

type GetExportClientVpnClientConfigurationVersionEnum string

const (
	GetExportClientVpnClientConfigurationVersionEnumTwoThousandAndSixteen1115 GetExportClientVpnClientConfigurationVersionEnum = "2016-11-15"
)

type GetExportClientVpnClientConfigurationQueryParams struct {
	Action              GetExportClientVpnClientConfigurationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClientVpnEndpointID string                                           `queryParam:"style=form,explode=true,name=ClientVpnEndpointId"`
	DryRun              *bool                                            `queryParam:"style=form,explode=true,name=DryRun"`
	Version             GetExportClientVpnClientConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetExportClientVpnClientConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetExportClientVpnClientConfigurationRequest struct {
	QueryParams GetExportClientVpnClientConfigurationQueryParams
	Headers     GetExportClientVpnClientConfigurationHeaders
}

type GetExportClientVpnClientConfigurationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
