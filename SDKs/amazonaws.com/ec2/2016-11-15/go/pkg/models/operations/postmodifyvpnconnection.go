package operations

type PostModifyVpnConnectionActionEnum string

const (
	PostModifyVpnConnectionActionEnumModifyVpnConnection PostModifyVpnConnectionActionEnum = "ModifyVpnConnection"
)

type PostModifyVpnConnectionVersionEnum string

const (
	PostModifyVpnConnectionVersionEnumTwoThousandAndSixteen1115 PostModifyVpnConnectionVersionEnum = "2016-11-15"
)

type PostModifyVpnConnectionQueryParams struct {
	Action  PostModifyVpnConnectionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyVpnConnectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyVpnConnectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyVpnConnectionRequest struct {
	QueryParams PostModifyVpnConnectionQueryParams
	Headers     PostModifyVpnConnectionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyVpnConnectionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
