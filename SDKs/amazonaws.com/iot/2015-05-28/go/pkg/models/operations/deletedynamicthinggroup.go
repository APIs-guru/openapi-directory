package operations



type DeleteDynamicThingGroupPathParams struct {
    ThingGroupName string `pathParam:"style=simple,explode=false,name=thingGroupName"`
    
}

type DeleteDynamicThingGroupQueryParams struct {
    ExpectedVersion *int64 `queryParam:"style=form,explode=true,name=expectedVersion"`
    
}

type DeleteDynamicThingGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteDynamicThingGroupRequest struct {
    PathParams DeleteDynamicThingGroupPathParams 
    QueryParams DeleteDynamicThingGroupQueryParams 
    Headers DeleteDynamicThingGroupHeaders 
    
}

type DeleteDynamicThingGroupResponse struct {
    ContentType string 
    DeleteDynamicThingGroupResponse map[string]interface{} 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    VersionConflictException *interface{} 
    
}

