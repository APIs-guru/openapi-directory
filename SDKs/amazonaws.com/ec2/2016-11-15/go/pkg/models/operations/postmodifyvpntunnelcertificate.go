package operations

type PostModifyVpnTunnelCertificateActionEnum string

const (
	PostModifyVpnTunnelCertificateActionEnumModifyVpnTunnelCertificate PostModifyVpnTunnelCertificateActionEnum = "ModifyVpnTunnelCertificate"
)

type PostModifyVpnTunnelCertificateVersionEnum string

const (
	PostModifyVpnTunnelCertificateVersionEnumTwoThousandAndSixteen1115 PostModifyVpnTunnelCertificateVersionEnum = "2016-11-15"
)

type PostModifyVpnTunnelCertificateQueryParams struct {
	Action  PostModifyVpnTunnelCertificateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyVpnTunnelCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyVpnTunnelCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyVpnTunnelCertificateRequest struct {
	QueryParams PostModifyVpnTunnelCertificateQueryParams
	Headers     PostModifyVpnTunnelCertificateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyVpnTunnelCertificateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
