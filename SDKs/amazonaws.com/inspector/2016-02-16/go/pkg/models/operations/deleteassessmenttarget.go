package operations

import (
"openapi/pkg/models/shared")


type DeleteAssessmentTargetXAmzTargetEnum string

const (
    DeleteAssessmentTargetXAmzTargetEnumInspectorServiceDeleteAssessmentTarget DeleteAssessmentTargetXAmzTargetEnum = "InspectorService.DeleteAssessmentTarget"
)


type DeleteAssessmentTargetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteAssessmentTargetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteAssessmentTargetRequest struct {
    Headers DeleteAssessmentTargetHeaders 
    Request shared.DeleteAssessmentTargetRequest `request:"mediaType=application/json"`
    
}

type DeleteAssessmentTargetResponse struct {
    AccessDeniedException *interface{} 
    AssessmentRunInProgressException *interface{} 
    ContentType string 
    InternalException *interface{} 
    InvalidInputException *interface{} 
    NoSuchEntityException *interface{} 
    ServiceTemporarilyUnavailableException *interface{} 
    StatusCode int64 
    
}

