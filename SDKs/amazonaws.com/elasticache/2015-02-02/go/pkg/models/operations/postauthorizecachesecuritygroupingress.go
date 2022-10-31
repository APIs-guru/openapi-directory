package operations

type PostAuthorizeCacheSecurityGroupIngressActionEnum string

const (
	PostAuthorizeCacheSecurityGroupIngressActionEnumAuthorizeCacheSecurityGroupIngress PostAuthorizeCacheSecurityGroupIngressActionEnum = "AuthorizeCacheSecurityGroupIngress"
)

type PostAuthorizeCacheSecurityGroupIngressVersionEnum string

const (
	PostAuthorizeCacheSecurityGroupIngressVersionEnumTwoThousandAndFifteen0202 PostAuthorizeCacheSecurityGroupIngressVersionEnum = "2015-02-02"
)

type PostAuthorizeCacheSecurityGroupIngressQueryParams struct {
	Action  PostAuthorizeCacheSecurityGroupIngressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAuthorizeCacheSecurityGroupIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAuthorizeCacheSecurityGroupIngressHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostAuthorizeCacheSecurityGroupIngressRequest struct {
	QueryParams PostAuthorizeCacheSecurityGroupIngressQueryParams
	Headers     PostAuthorizeCacheSecurityGroupIngressHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAuthorizeCacheSecurityGroupIngressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
