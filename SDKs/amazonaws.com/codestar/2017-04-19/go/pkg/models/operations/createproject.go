package operations

import (
"openapi/pkg/models/shared")


type CreateProjectXAmzTargetEnum string

const (
    CreateProjectXAmzTargetEnumCodeStar20170419CreateProject CreateProjectXAmzTargetEnum = "CodeStar_20170419.CreateProject"
)


type CreateProjectHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateProjectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateProjectRequest struct {
    Headers CreateProjectHeaders 
    Request shared.CreateProjectRequest `request:"mediaType=application/json"`
    
}

type CreateProjectResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    CreateProjectResult *shared.CreateProjectResult 
    InvalidServiceRoleException *interface{} 
    LimitExceededException *interface{} 
    ProjectAlreadyExistsException *interface{} 
    ProjectConfigurationException *interface{} 
    ProjectCreationFailedException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

