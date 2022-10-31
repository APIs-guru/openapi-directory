package operations




type GetRebalanceSlotsInGlobalReplicationGroupActionEnum string

const (
    GetRebalanceSlotsInGlobalReplicationGroupActionEnumRebalanceSlotsInGlobalReplicationGroup GetRebalanceSlotsInGlobalReplicationGroupActionEnum = "RebalanceSlotsInGlobalReplicationGroup"
)



type GetRebalanceSlotsInGlobalReplicationGroupVersionEnum string

const (
    GetRebalanceSlotsInGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202 GetRebalanceSlotsInGlobalReplicationGroupVersionEnum = "2015-02-02"
)


type GetRebalanceSlotsInGlobalReplicationGroupQueryParams struct {
    Action GetRebalanceSlotsInGlobalReplicationGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ApplyImmediately bool `queryParam:"style=form,explode=true,name=ApplyImmediately"`
    GlobalReplicationGroupID string `queryParam:"style=form,explode=true,name=GlobalReplicationGroupId"`
    Version GetRebalanceSlotsInGlobalReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetRebalanceSlotsInGlobalReplicationGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRebalanceSlotsInGlobalReplicationGroupRequest struct {
    QueryParams GetRebalanceSlotsInGlobalReplicationGroupQueryParams 
    Headers GetRebalanceSlotsInGlobalReplicationGroupHeaders 
    
}

type GetRebalanceSlotsInGlobalReplicationGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

