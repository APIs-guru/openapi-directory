package operations

import (
"openapi/pkg/models/shared")


type RemovePermissionActionGroupEnum string

const (
    RemovePermissionActionGroupEnumAgentPermissions RemovePermissionActionGroupEnum = "agentPermissions"
)


type RemovePermissionPathParams struct {
    ActionGroup RemovePermissionActionGroupEnum `pathParam:"style=simple,explode=false,name=actionGroup"`
    ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
    
}

type RemovePermissionQueryParams struct {
    RevisionID string `queryParam:"style=form,explode=true,name=revisionId"`
    
}

type RemovePermissionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type RemovePermissionRequest struct {
    PathParams RemovePermissionPathParams 
    QueryParams RemovePermissionQueryParams 
    Headers RemovePermissionHeaders 
    
}

type RemovePermissionResponse struct {
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    RemovePermissionResponse *shared.RemovePermissionResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

