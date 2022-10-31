package operations

import (
"openapi/pkg/models/shared")


type PutPermissionActionGroupEnum string

const (
    PutPermissionActionGroupEnumAgentPermissions PutPermissionActionGroupEnum = "agentPermissions"
)


type PutPermissionPathParams struct {
    ActionGroup PutPermissionActionGroupEnum `pathParam:"style=simple,explode=false,name=actionGroup"`
    ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
    
}

type PutPermissionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PutPermissionRequestBody struct {
    Principals []string `json:"principals"`
    RevisionID *string `json:"revisionId,omitempty"`
    
}

type PutPermissionRequest struct {
    PathParams PutPermissionPathParams 
    Headers PutPermissionHeaders 
    Request PutPermissionRequestBody `request:"mediaType=application/json"`
    
}

type PutPermissionResponse struct {
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    PutPermissionResponse *shared.PutPermissionResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

