package operations




type GetDeleteCacheClusterActionEnum string

const (
    GetDeleteCacheClusterActionEnumDeleteCacheCluster GetDeleteCacheClusterActionEnum = "DeleteCacheCluster"
)



type GetDeleteCacheClusterVersionEnum string

const (
    GetDeleteCacheClusterVersionEnumTwoThousandAndFifteen0202 GetDeleteCacheClusterVersionEnum = "2015-02-02"
)


type GetDeleteCacheClusterQueryParams struct {
    Action GetDeleteCacheClusterActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CacheClusterID string `queryParam:"style=form,explode=true,name=CacheClusterId"`
    FinalSnapshotIdentifier *string `queryParam:"style=form,explode=true,name=FinalSnapshotIdentifier"`
    Version GetDeleteCacheClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteCacheClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteCacheClusterRequest struct {
    QueryParams GetDeleteCacheClusterQueryParams 
    Headers GetDeleteCacheClusterHeaders 
    
}

type GetDeleteCacheClusterResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

