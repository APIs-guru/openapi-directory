package operations

type GetExportClientVpnClientCertificateRevocationListActionEnum string

const (
	GetExportClientVpnClientCertificateRevocationListActionEnumExportClientVpnClientCertificateRevocationList GetExportClientVpnClientCertificateRevocationListActionEnum = "ExportClientVpnClientCertificateRevocationList"
)

type GetExportClientVpnClientCertificateRevocationListVersionEnum string

const (
	GetExportClientVpnClientCertificateRevocationListVersionEnumTwoThousandAndSixteen1115 GetExportClientVpnClientCertificateRevocationListVersionEnum = "2016-11-15"
)

type GetExportClientVpnClientCertificateRevocationListQueryParams struct {
	Action              GetExportClientVpnClientCertificateRevocationListActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClientVpnEndpointID string                                                       `queryParam:"style=form,explode=true,name=ClientVpnEndpointId"`
	DryRun              *bool                                                        `queryParam:"style=form,explode=true,name=DryRun"`
	Version             GetExportClientVpnClientCertificateRevocationListVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetExportClientVpnClientCertificateRevocationListHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetExportClientVpnClientCertificateRevocationListRequest struct {
	QueryParams GetExportClientVpnClientCertificateRevocationListQueryParams
	Headers     GetExportClientVpnClientCertificateRevocationListHeaders
}

type GetExportClientVpnClientCertificateRevocationListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
