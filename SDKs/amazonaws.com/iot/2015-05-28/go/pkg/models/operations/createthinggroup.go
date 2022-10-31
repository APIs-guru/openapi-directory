package operations

import (
"openapi/pkg/models/shared")

type CreateThingGroupPathParams struct {
    ThingGroupName string `pathParam:"style=simple,explode=false,name=thingGroupName"`
    
}

type CreateThingGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateThingGroupRequestBodyThingGroupProperties struct {
    AttributePayload *shared.AttributePayload `json:"attributePayload,omitempty"`
    ThingGroupDescription *string `json:"thingGroupDescription,omitempty"`
    
}

type CreateThingGroupRequestBody struct {
    ParentGroupName *string `json:"parentGroupName,omitempty"`
    Tags []shared.Tag `json:"tags,omitempty"`
    ThingGroupProperties *CreateThingGroupRequestBodyThingGroupProperties `json:"thingGroupProperties,omitempty"`
    
}

type CreateThingGroupRequest struct {
    PathParams CreateThingGroupPathParams 
    Headers CreateThingGroupHeaders 
    Request CreateThingGroupRequestBody `request:"mediaType=application/json"`
    
}

type CreateThingGroupResponse struct {
    ContentType string 
    CreateThingGroupResponse *shared.CreateThingGroupResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

