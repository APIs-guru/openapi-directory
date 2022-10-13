package operations

type GetImportClientVpnClientCertificateRevocationListActionEnum string

const (
	GetImportClientVpnClientCertificateRevocationListActionEnumImportClientVpnClientCertificateRevocationList GetImportClientVpnClientCertificateRevocationListActionEnum = "ImportClientVpnClientCertificateRevocationList"
)

type GetImportClientVpnClientCertificateRevocationListVersionEnum string

const (
	GetImportClientVpnClientCertificateRevocationListVersionEnumTwoThousandAndSixteen1115 GetImportClientVpnClientCertificateRevocationListVersionEnum = "2016-11-15"
)

type GetImportClientVpnClientCertificateRevocationListQueryParams struct {
	Action                    GetImportClientVpnClientCertificateRevocationListActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CertificateRevocationList string                                                       `queryParam:"style=form,explode=true,name=CertificateRevocationList"`
	ClientVpnEndpointID       string                                                       `queryParam:"style=form,explode=true,name=ClientVpnEndpointId"`
	DryRun                    *bool                                                        `queryParam:"style=form,explode=true,name=DryRun"`
	Version                   GetImportClientVpnClientCertificateRevocationListVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetImportClientVpnClientCertificateRevocationListHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetImportClientVpnClientCertificateRevocationListRequest struct {
	QueryParams GetImportClientVpnClientCertificateRevocationListQueryParams
	Headers     GetImportClientVpnClientCertificateRevocationListHeaders
}

type GetImportClientVpnClientCertificateRevocationListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
