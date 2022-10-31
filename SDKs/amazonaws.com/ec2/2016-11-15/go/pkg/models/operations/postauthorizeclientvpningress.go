package operations

type PostAuthorizeClientVpnIngressActionEnum string

const (
	PostAuthorizeClientVpnIngressActionEnumAuthorizeClientVpnIngress PostAuthorizeClientVpnIngressActionEnum = "AuthorizeClientVpnIngress"
)

type PostAuthorizeClientVpnIngressVersionEnum string

const (
	PostAuthorizeClientVpnIngressVersionEnumTwoThousandAndSixteen1115 PostAuthorizeClientVpnIngressVersionEnum = "2016-11-15"
)

type PostAuthorizeClientVpnIngressQueryParams struct {
	Action  PostAuthorizeClientVpnIngressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAuthorizeClientVpnIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAuthorizeClientVpnIngressHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostAuthorizeClientVpnIngressRequest struct {
	QueryParams PostAuthorizeClientVpnIngressQueryParams
	Headers     PostAuthorizeClientVpnIngressHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAuthorizeClientVpnIngressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
