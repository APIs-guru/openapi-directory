package operations

import (
"openapi/pkg/models/shared")


type DeleteProjectXAmzTargetEnum string

const (
    DeleteProjectXAmzTargetEnumCodeStar20170419DeleteProject DeleteProjectXAmzTargetEnum = "CodeStar_20170419.DeleteProject"
)


type DeleteProjectHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteProjectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteProjectRequest struct {
    Headers DeleteProjectHeaders 
    Request shared.DeleteProjectRequest `request:"mediaType=application/json"`
    
}

type DeleteProjectResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    DeleteProjectResult *shared.DeleteProjectResult 
    InvalidServiceRoleException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

