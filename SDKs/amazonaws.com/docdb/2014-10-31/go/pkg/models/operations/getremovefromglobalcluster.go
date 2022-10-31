package operations




type GetRemoveFromGlobalClusterActionEnum string

const (
    GetRemoveFromGlobalClusterActionEnumRemoveFromGlobalCluster GetRemoveFromGlobalClusterActionEnum = "RemoveFromGlobalCluster"
)



type GetRemoveFromGlobalClusterVersionEnum string

const (
    GetRemoveFromGlobalClusterVersionEnumTwoThousandAndFourteen1031 GetRemoveFromGlobalClusterVersionEnum = "2014-10-31"
)


type GetRemoveFromGlobalClusterQueryParams struct {
    Action GetRemoveFromGlobalClusterActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DbClusterIdentifier string `queryParam:"style=form,explode=true,name=DbClusterIdentifier"`
    GlobalClusterIdentifier string `queryParam:"style=form,explode=true,name=GlobalClusterIdentifier"`
    Version GetRemoveFromGlobalClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetRemoveFromGlobalClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRemoveFromGlobalClusterRequest struct {
    QueryParams GetRemoveFromGlobalClusterQueryParams 
    Headers GetRemoveFromGlobalClusterHeaders 
    
}

type GetRemoveFromGlobalClusterResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

