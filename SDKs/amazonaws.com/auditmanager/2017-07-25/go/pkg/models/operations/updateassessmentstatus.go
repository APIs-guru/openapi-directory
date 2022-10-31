package operations

import (
"openapi/pkg/models/shared")

type UpdateAssessmentStatusPathParams struct {
    AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
    
}

type UpdateAssessmentStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type UpdateAssessmentStatusRequestBodyStatusEnum string

const (
    UpdateAssessmentStatusRequestBodyStatusEnumActive UpdateAssessmentStatusRequestBodyStatusEnum = "ACTIVE"
UpdateAssessmentStatusRequestBodyStatusEnumInactive UpdateAssessmentStatusRequestBodyStatusEnum = "INACTIVE"
)


type UpdateAssessmentStatusRequestBody struct {
    Status UpdateAssessmentStatusRequestBodyStatusEnum `json:"status"`
    
}

type UpdateAssessmentStatusRequest struct {
    PathParams UpdateAssessmentStatusPathParams 
    Headers UpdateAssessmentStatusHeaders 
    Request UpdateAssessmentStatusRequestBody `request:"mediaType=application/json"`
    
}

type UpdateAssessmentStatusResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateAssessmentStatusResponse *shared.UpdateAssessmentStatusResponse 
    ValidationException *interface{} 
    
}

