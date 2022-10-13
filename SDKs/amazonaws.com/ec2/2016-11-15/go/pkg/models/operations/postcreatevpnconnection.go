package operations

type PostCreateVpnConnectionActionEnum string

const (
	PostCreateVpnConnectionActionEnumCreateVpnConnection PostCreateVpnConnectionActionEnum = "CreateVpnConnection"
)

type PostCreateVpnConnectionVersionEnum string

const (
	PostCreateVpnConnectionVersionEnumTwoThousandAndSixteen1115 PostCreateVpnConnectionVersionEnum = "2016-11-15"
)

type PostCreateVpnConnectionQueryParams struct {
	Action  PostCreateVpnConnectionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateVpnConnectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateVpnConnectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateVpnConnectionRequest struct {
	QueryParams PostCreateVpnConnectionQueryParams
	Headers     PostCreateVpnConnectionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateVpnConnectionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
