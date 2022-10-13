package operations

type PostRebootCacheClusterActionEnum string

const (
	PostRebootCacheClusterActionEnumRebootCacheCluster PostRebootCacheClusterActionEnum = "RebootCacheCluster"
)

type PostRebootCacheClusterVersionEnum string

const (
	PostRebootCacheClusterVersionEnumTwoThousandAndFifteen0202 PostRebootCacheClusterVersionEnum = "2015-02-02"
)

type PostRebootCacheClusterQueryParams struct {
	Action  PostRebootCacheClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRebootCacheClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRebootCacheClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRebootCacheClusterRequest struct {
	QueryParams PostRebootCacheClusterQueryParams
	Headers     PostRebootCacheClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRebootCacheClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
