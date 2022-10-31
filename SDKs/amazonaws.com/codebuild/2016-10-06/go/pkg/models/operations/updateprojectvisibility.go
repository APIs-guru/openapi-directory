package operations

import (
"openapi/pkg/models/shared")


type UpdateProjectVisibilityXAmzTargetEnum string

const (
    UpdateProjectVisibilityXAmzTargetEnumCodeBuild20161006UpdateProjectVisibility UpdateProjectVisibilityXAmzTargetEnum = "CodeBuild_20161006.UpdateProjectVisibility"
)


type UpdateProjectVisibilityHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateProjectVisibilityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateProjectVisibilityRequest struct {
    Headers UpdateProjectVisibilityHeaders 
    Request shared.UpdateProjectVisibilityInput `request:"mediaType=application/json"`
    
}

type UpdateProjectVisibilityResponse struct {
    ContentType string 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateProjectVisibilityOutput *shared.UpdateProjectVisibilityOutput 
    
}

