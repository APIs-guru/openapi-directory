package operations

import (
"openapi/pkg/models/shared")

type UpdateThingGroupPathParams struct {
    ThingGroupName string `pathParam:"style=simple,explode=false,name=thingGroupName"`
    
}

type UpdateThingGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateThingGroupRequestBodyThingGroupProperties struct {
    AttributePayload *shared.AttributePayload `json:"attributePayload,omitempty"`
    ThingGroupDescription *string `json:"thingGroupDescription,omitempty"`
    
}

type UpdateThingGroupRequestBody struct {
    ExpectedVersion *int64 `json:"expectedVersion,omitempty"`
    ThingGroupProperties UpdateThingGroupRequestBodyThingGroupProperties `json:"thingGroupProperties"`
    
}

type UpdateThingGroupRequest struct {
    PathParams UpdateThingGroupPathParams 
    Headers UpdateThingGroupHeaders 
    Request UpdateThingGroupRequestBody `request:"mediaType=application/json"`
    
}

type UpdateThingGroupResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateThingGroupResponse *shared.UpdateThingGroupResponse 
    VersionConflictException *interface{} 
    
}

