package operations




type GetDeletePlacementGroupActionEnum string

const (
    GetDeletePlacementGroupActionEnumDeletePlacementGroup GetDeletePlacementGroupActionEnum = "DeletePlacementGroup"
)



type GetDeletePlacementGroupVersionEnum string

const (
    GetDeletePlacementGroupVersionEnumTwoThousandAndSixteen1115 GetDeletePlacementGroupVersionEnum = "2016-11-15"
)


type GetDeletePlacementGroupQueryParams struct {
    Action GetDeletePlacementGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    GroupName string `queryParam:"style=form,explode=true,name=GroupName"`
    Version GetDeletePlacementGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeletePlacementGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeletePlacementGroupRequest struct {
    QueryParams GetDeletePlacementGroupQueryParams 
    Headers GetDeletePlacementGroupHeaders 
    
}

type GetDeletePlacementGroupResponse struct {
    ContentType string 
    StatusCode int64 
    
}

