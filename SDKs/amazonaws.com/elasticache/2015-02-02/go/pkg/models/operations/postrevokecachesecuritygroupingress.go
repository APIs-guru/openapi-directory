package operations

type PostRevokeCacheSecurityGroupIngressActionEnum string

const (
	PostRevokeCacheSecurityGroupIngressActionEnumRevokeCacheSecurityGroupIngress PostRevokeCacheSecurityGroupIngressActionEnum = "RevokeCacheSecurityGroupIngress"
)

type PostRevokeCacheSecurityGroupIngressVersionEnum string

const (
	PostRevokeCacheSecurityGroupIngressVersionEnumTwoThousandAndFifteen0202 PostRevokeCacheSecurityGroupIngressVersionEnum = "2015-02-02"
)

type PostRevokeCacheSecurityGroupIngressQueryParams struct {
	Action  PostRevokeCacheSecurityGroupIngressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRevokeCacheSecurityGroupIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRevokeCacheSecurityGroupIngressHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRevokeCacheSecurityGroupIngressRequest struct {
	QueryParams PostRevokeCacheSecurityGroupIngressQueryParams
	Headers     PostRevokeCacheSecurityGroupIngressHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRevokeCacheSecurityGroupIngressResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
