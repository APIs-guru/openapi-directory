package operations



type DeleteThingGroupPathParams struct {
    ThingGroupName string `pathParam:"style=simple,explode=false,name=thingGroupName"`
    
}

type DeleteThingGroupQueryParams struct {
    ExpectedVersion *int64 `queryParam:"style=form,explode=true,name=expectedVersion"`
    
}

type DeleteThingGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteThingGroupRequest struct {
    PathParams DeleteThingGroupPathParams 
    QueryParams DeleteThingGroupQueryParams 
    Headers DeleteThingGroupHeaders 
    
}

type DeleteThingGroupResponse struct {
    ContentType string 
    DeleteThingGroupResponse map[string]interface{} 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    VersionConflictException *interface{} 
    
}

