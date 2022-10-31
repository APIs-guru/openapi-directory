package operations




type GetDeleteGlobalClusterActionEnum string

const (
    GetDeleteGlobalClusterActionEnumDeleteGlobalCluster GetDeleteGlobalClusterActionEnum = "DeleteGlobalCluster"
)



type GetDeleteGlobalClusterVersionEnum string

const (
    GetDeleteGlobalClusterVersionEnumTwoThousandAndFourteen1031 GetDeleteGlobalClusterVersionEnum = "2014-10-31"
)


type GetDeleteGlobalClusterQueryParams struct {
    Action GetDeleteGlobalClusterActionEnum `queryParam:"style=form,explode=true,name=Action"`
    GlobalClusterIdentifier string `queryParam:"style=form,explode=true,name=GlobalClusterIdentifier"`
    Version GetDeleteGlobalClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteGlobalClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteGlobalClusterRequest struct {
    QueryParams GetDeleteGlobalClusterQueryParams 
    Headers GetDeleteGlobalClusterHeaders 
    
}

type GetDeleteGlobalClusterResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

