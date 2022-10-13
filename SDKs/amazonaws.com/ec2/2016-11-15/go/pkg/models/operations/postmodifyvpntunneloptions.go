package operations

type PostModifyVpnTunnelOptionsActionEnum string

const (
	PostModifyVpnTunnelOptionsActionEnumModifyVpnTunnelOptions PostModifyVpnTunnelOptionsActionEnum = "ModifyVpnTunnelOptions"
)

type PostModifyVpnTunnelOptionsVersionEnum string

const (
	PostModifyVpnTunnelOptionsVersionEnumTwoThousandAndSixteen1115 PostModifyVpnTunnelOptionsVersionEnum = "2016-11-15"
)

type PostModifyVpnTunnelOptionsQueryParams struct {
	Action  PostModifyVpnTunnelOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyVpnTunnelOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyVpnTunnelOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyVpnTunnelOptionsRequest struct {
	QueryParams PostModifyVpnTunnelOptionsQueryParams
	Headers     PostModifyVpnTunnelOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyVpnTunnelOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
