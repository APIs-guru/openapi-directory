package operations

import (
"openapi/pkg/models/shared")


type CreateExclusionsPreviewXAmzTargetEnum string

const (
    CreateExclusionsPreviewXAmzTargetEnumInspectorServiceCreateExclusionsPreview CreateExclusionsPreviewXAmzTargetEnum = "InspectorService.CreateExclusionsPreview"
)


type CreateExclusionsPreviewHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateExclusionsPreviewXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateExclusionsPreviewRequest struct {
    Headers CreateExclusionsPreviewHeaders 
    Request shared.CreateExclusionsPreviewRequest `request:"mediaType=application/json"`
    
}

type CreateExclusionsPreviewResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateExclusionsPreviewResponse *shared.CreateExclusionsPreviewResponse 
    InternalException *interface{} 
    InvalidInputException *interface{} 
    NoSuchEntityException *interface{} 
    PreviewGenerationInProgressException *interface{} 
    ServiceTemporarilyUnavailableException *interface{} 
    StatusCode int64 
    
}

