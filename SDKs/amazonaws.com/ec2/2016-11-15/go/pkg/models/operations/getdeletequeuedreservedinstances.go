package operations




type GetDeleteQueuedReservedInstancesActionEnum string

const (
    GetDeleteQueuedReservedInstancesActionEnumDeleteQueuedReservedInstances GetDeleteQueuedReservedInstancesActionEnum = "DeleteQueuedReservedInstances"
)



type GetDeleteQueuedReservedInstancesVersionEnum string

const (
    GetDeleteQueuedReservedInstancesVersionEnumTwoThousandAndSixteen1115 GetDeleteQueuedReservedInstancesVersionEnum = "2016-11-15"
)


type GetDeleteQueuedReservedInstancesQueryParams struct {
    Action GetDeleteQueuedReservedInstancesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    ReservedInstancesID []string `queryParam:"style=form,explode=true,name=ReservedInstancesId"`
    Version GetDeleteQueuedReservedInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteQueuedReservedInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteQueuedReservedInstancesRequest struct {
    QueryParams GetDeleteQueuedReservedInstancesQueryParams 
    Headers GetDeleteQueuedReservedInstancesHeaders 
    
}

type GetDeleteQueuedReservedInstancesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

