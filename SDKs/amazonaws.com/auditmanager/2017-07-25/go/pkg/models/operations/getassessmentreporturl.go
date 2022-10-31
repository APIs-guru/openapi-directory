package operations

import (
"openapi/pkg/models/shared")

type GetAssessmentReportURLPathParams struct {
    AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
    AssessmentReportID string `pathParam:"style=simple,explode=false,name=assessmentReportId"`
    
}

type GetAssessmentReportURLHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAssessmentReportURLRequest struct {
    PathParams GetAssessmentReportURLPathParams 
    Headers GetAssessmentReportURLHeaders 
    
}

type GetAssessmentReportURLResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetAssessmentReportURLResponse *shared.GetAssessmentReportURLResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

