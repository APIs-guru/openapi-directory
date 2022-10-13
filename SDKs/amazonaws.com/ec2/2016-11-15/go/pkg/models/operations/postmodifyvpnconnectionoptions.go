package operations

type PostModifyVpnConnectionOptionsActionEnum string

const (
	PostModifyVpnConnectionOptionsActionEnumModifyVpnConnectionOptions PostModifyVpnConnectionOptionsActionEnum = "ModifyVpnConnectionOptions"
)

type PostModifyVpnConnectionOptionsVersionEnum string

const (
	PostModifyVpnConnectionOptionsVersionEnumTwoThousandAndSixteen1115 PostModifyVpnConnectionOptionsVersionEnum = "2016-11-15"
)

type PostModifyVpnConnectionOptionsQueryParams struct {
	Action  PostModifyVpnConnectionOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyVpnConnectionOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyVpnConnectionOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyVpnConnectionOptionsRequest struct {
	QueryParams PostModifyVpnConnectionOptionsQueryParams
	Headers     PostModifyVpnConnectionOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyVpnConnectionOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
