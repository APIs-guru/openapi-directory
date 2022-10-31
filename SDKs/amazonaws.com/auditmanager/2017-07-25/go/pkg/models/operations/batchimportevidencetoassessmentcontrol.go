package operations

import (
"openapi/pkg/models/shared")

type BatchImportEvidenceToAssessmentControlPathParams struct {
    AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
    ControlID string `pathParam:"style=simple,explode=false,name=controlId"`
    ControlSetID string `pathParam:"style=simple,explode=false,name=controlSetId"`
    
}

type BatchImportEvidenceToAssessmentControlHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type BatchImportEvidenceToAssessmentControlRequestBody struct {
    ManualEvidence []shared.ManualEvidence `json:"manualEvidence"`
    
}

type BatchImportEvidenceToAssessmentControlRequest struct {
    PathParams BatchImportEvidenceToAssessmentControlPathParams 
    Headers BatchImportEvidenceToAssessmentControlHeaders 
    Request BatchImportEvidenceToAssessmentControlRequestBody `request:"mediaType=application/json"`
    
}

type BatchImportEvidenceToAssessmentControlResponse struct {
    AccessDeniedException *interface{} 
    BatchImportEvidenceToAssessmentControlResponse *shared.BatchImportEvidenceToAssessmentControlResponse 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

