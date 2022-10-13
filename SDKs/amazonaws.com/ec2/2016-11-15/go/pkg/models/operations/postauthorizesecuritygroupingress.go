package operations

type PostAuthorizeSecurityGroupIngressActionEnum string

const (
	PostAuthorizeSecurityGroupIngressActionEnumAuthorizeSecurityGroupIngress PostAuthorizeSecurityGroupIngressActionEnum = "AuthorizeSecurityGroupIngress"
)

type PostAuthorizeSecurityGroupIngressVersionEnum string

const (
	PostAuthorizeSecurityGroupIngressVersionEnumTwoThousandAndSixteen1115 PostAuthorizeSecurityGroupIngressVersionEnum = "2016-11-15"
)

type PostAuthorizeSecurityGroupIngressQueryParams struct {
	Action  PostAuthorizeSecurityGroupIngressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAuthorizeSecurityGroupIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAuthorizeSecurityGroupIngressHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAuthorizeSecurityGroupIngressRequest struct {
	QueryParams PostAuthorizeSecurityGroupIngressQueryParams
	Headers     PostAuthorizeSecurityGroupIngressHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAuthorizeSecurityGroupIngressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
