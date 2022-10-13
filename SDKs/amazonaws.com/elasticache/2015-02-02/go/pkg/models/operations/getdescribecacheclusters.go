package operations

type GetDescribeCacheClustersActionEnum string

const (
	GetDescribeCacheClustersActionEnumDescribeCacheClusters GetDescribeCacheClustersActionEnum = "DescribeCacheClusters"
)

type GetDescribeCacheClustersVersionEnum string

const (
	GetDescribeCacheClustersVersionEnumTwoThousandAndFifteen0202 GetDescribeCacheClustersVersionEnum = "2015-02-02"
)

type GetDescribeCacheClustersQueryParams struct {
	Action                                  GetDescribeCacheClustersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CacheClusterID                          *string                             `queryParam:"style=form,explode=true,name=CacheClusterId"`
	Marker                                  *string                             `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords                              *int64                              `queryParam:"style=form,explode=true,name=MaxRecords"`
	ShowCacheClustersNotInReplicationGroups *bool                               `queryParam:"style=form,explode=true,name=ShowCacheClustersNotInReplicationGroups"`
	ShowCacheNodeInfo                       *bool                               `queryParam:"style=form,explode=true,name=ShowCacheNodeInfo"`
	Version                                 GetDescribeCacheClustersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeCacheClustersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeCacheClustersRequest struct {
	QueryParams GetDescribeCacheClustersQueryParams
	Headers     GetDescribeCacheClustersHeaders
}

type GetDescribeCacheClustersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
