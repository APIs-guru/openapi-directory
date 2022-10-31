package operations

import (
"openapi/pkg/models/shared")


type CreateResourceGroupXAmzTargetEnum string

const (
    CreateResourceGroupXAmzTargetEnumInspectorServiceCreateResourceGroup CreateResourceGroupXAmzTargetEnum = "InspectorService.CreateResourceGroup"
)


type CreateResourceGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateResourceGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateResourceGroupRequest struct {
    Headers CreateResourceGroupHeaders 
    Request shared.CreateResourceGroupRequest `request:"mediaType=application/json"`
    
}

type CreateResourceGroupResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateResourceGroupResponse *shared.CreateResourceGroupResponse 
    InternalException *interface{} 
    InvalidInputException *interface{} 
    LimitExceededException *interface{} 
    ServiceTemporarilyUnavailableException *interface{} 
    StatusCode int64 
    
}

