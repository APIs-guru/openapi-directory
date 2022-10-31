package operations

import (
"openapi/pkg/models/shared")


type DeleteAssessmentRunXAmzTargetEnum string

const (
    DeleteAssessmentRunXAmzTargetEnumInspectorServiceDeleteAssessmentRun DeleteAssessmentRunXAmzTargetEnum = "InspectorService.DeleteAssessmentRun"
)


type DeleteAssessmentRunHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteAssessmentRunXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteAssessmentRunRequest struct {
    Headers DeleteAssessmentRunHeaders 
    Request shared.DeleteAssessmentRunRequest `request:"mediaType=application/json"`
    
}

type DeleteAssessmentRunResponse struct {
    AccessDeniedException *interface{} 
    AssessmentRunInProgressException *interface{} 
    ContentType string 
    InternalException *interface{} 
    InvalidInputException *interface{} 
    NoSuchEntityException *interface{} 
    ServiceTemporarilyUnavailableException *interface{} 
    StatusCode int64 
    
}

