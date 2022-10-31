package operations

import (
"openapi/pkg/models/shared")


type GetAssessmentReportXAmzTargetEnum string

const (
    GetAssessmentReportXAmzTargetEnumInspectorServiceGetAssessmentReport GetAssessmentReportXAmzTargetEnum = "InspectorService.GetAssessmentReport"
)


type GetAssessmentReportHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetAssessmentReportXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetAssessmentReportRequest struct {
    Headers GetAssessmentReportHeaders 
    Request shared.GetAssessmentReportRequest `request:"mediaType=application/json"`
    
}

type GetAssessmentReportResponse struct {
    AccessDeniedException *interface{} 
    AssessmentRunInProgressException *interface{} 
    ContentType string 
    GetAssessmentReportResponse *shared.GetAssessmentReportResponse 
    InternalException *interface{} 
    InvalidInputException *interface{} 
    NoSuchEntityException *interface{} 
    ServiceTemporarilyUnavailableException *interface{} 
    StatusCode int64 
    UnsupportedFeatureException *interface{} 
    
}

