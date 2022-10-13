package operations

type PostCreateCacheClusterActionEnum string

const (
	PostCreateCacheClusterActionEnumCreateCacheCluster PostCreateCacheClusterActionEnum = "CreateCacheCluster"
)

type PostCreateCacheClusterVersionEnum string

const (
	PostCreateCacheClusterVersionEnumTwoThousandAndFifteen0202 PostCreateCacheClusterVersionEnum = "2015-02-02"
)

type PostCreateCacheClusterQueryParams struct {
	Action  PostCreateCacheClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateCacheClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateCacheClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateCacheClusterRequest struct {
	QueryParams PostCreateCacheClusterQueryParams
	Headers     PostCreateCacheClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateCacheClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
