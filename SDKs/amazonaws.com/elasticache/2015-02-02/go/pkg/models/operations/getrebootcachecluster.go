package operations

type GetRebootCacheClusterActionEnum string

const (
	GetRebootCacheClusterActionEnumRebootCacheCluster GetRebootCacheClusterActionEnum = "RebootCacheCluster"
)

type GetRebootCacheClusterVersionEnum string

const (
	GetRebootCacheClusterVersionEnumTwoThousandAndFifteen0202 GetRebootCacheClusterVersionEnum = "2015-02-02"
)

type GetRebootCacheClusterQueryParams struct {
	Action               GetRebootCacheClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CacheClusterID       string                           `queryParam:"style=form,explode=true,name=CacheClusterId"`
	CacheNodeIdsToReboot []string                         `queryParam:"style=form,explode=true,name=CacheNodeIdsToReboot"`
	Version              GetRebootCacheClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRebootCacheClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRebootCacheClusterRequest struct {
	QueryParams GetRebootCacheClusterQueryParams
	Headers     GetRebootCacheClusterHeaders
}

type GetRebootCacheClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
