package operations




type PostDeleteCacheClusterActionEnum string

const (
    PostDeleteCacheClusterActionEnumDeleteCacheCluster PostDeleteCacheClusterActionEnum = "DeleteCacheCluster"
)



type PostDeleteCacheClusterVersionEnum string

const (
    PostDeleteCacheClusterVersionEnumTwoThousandAndFifteen0202 PostDeleteCacheClusterVersionEnum = "2015-02-02"
)


type PostDeleteCacheClusterQueryParams struct {
    Action PostDeleteCacheClusterActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteCacheClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteCacheClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteCacheClusterRequest struct {
    QueryParams PostDeleteCacheClusterQueryParams 
    Headers PostDeleteCacheClusterHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteCacheClusterResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

