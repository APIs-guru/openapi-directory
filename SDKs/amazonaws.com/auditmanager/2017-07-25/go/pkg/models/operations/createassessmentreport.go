package operations

import (
"openapi/pkg/models/shared")

type CreateAssessmentReportPathParams struct {
    AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
    
}

type CreateAssessmentReportHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateAssessmentReportRequestBody struct {
    Description *string `json:"description,omitempty"`
    Name string `json:"name"`
    
}

type CreateAssessmentReportRequest struct {
    PathParams CreateAssessmentReportPathParams 
    Headers CreateAssessmentReportHeaders 
    Request CreateAssessmentReportRequestBody `request:"mediaType=application/json"`
    
}

type CreateAssessmentReportResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateAssessmentReportResponse *shared.CreateAssessmentReportResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

