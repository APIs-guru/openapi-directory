package operations



type UpdateThingGroupsForThingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateThingGroupsForThingRequestBody struct {
    OverrideDynamicGroups *bool `json:"overrideDynamicGroups,omitempty"`
    ThingGroupsToAdd []string `json:"thingGroupsToAdd,omitempty"`
    ThingGroupsToRemove []string `json:"thingGroupsToRemove,omitempty"`
    ThingName *string `json:"thingName,omitempty"`
    
}

type UpdateThingGroupsForThingRequest struct {
    Headers UpdateThingGroupsForThingHeaders 
    Request UpdateThingGroupsForThingRequestBody `request:"mediaType=application/json"`
    
}

type UpdateThingGroupsForThingResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateThingGroupsForThingResponse map[string]interface{} 
    
}

