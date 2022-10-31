package operations

import (
"openapi/pkg/models/shared")

type UpdateAssessmentFrameworkPathParams struct {
    FrameworkID string `pathParam:"style=simple,explode=false,name=frameworkId"`
    
}

type UpdateAssessmentFrameworkHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateAssessmentFrameworkRequestBody struct {
    ComplianceType *string `json:"complianceType,omitempty"`
    ControlSets []shared.UpdateAssessmentFrameworkControlSet `json:"controlSets"`
    Description *string `json:"description,omitempty"`
    Name string `json:"name"`
    
}

type UpdateAssessmentFrameworkRequest struct {
    PathParams UpdateAssessmentFrameworkPathParams 
    Headers UpdateAssessmentFrameworkHeaders 
    Request UpdateAssessmentFrameworkRequestBody `request:"mediaType=application/json"`
    
}

type UpdateAssessmentFrameworkResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateAssessmentFrameworkResponse *shared.UpdateAssessmentFrameworkResponse 
    ValidationException *interface{} 
    
}

