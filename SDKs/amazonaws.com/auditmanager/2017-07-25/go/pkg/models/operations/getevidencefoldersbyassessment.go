package operations

import (
"openapi/pkg/models/shared")

type GetEvidenceFoldersByAssessmentPathParams struct {
    AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
    
}

type GetEvidenceFoldersByAssessmentQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type GetEvidenceFoldersByAssessmentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetEvidenceFoldersByAssessmentRequest struct {
    PathParams GetEvidenceFoldersByAssessmentPathParams 
    QueryParams GetEvidenceFoldersByAssessmentQueryParams 
    Headers GetEvidenceFoldersByAssessmentHeaders 
    
}

type GetEvidenceFoldersByAssessmentResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetEvidenceFoldersByAssessmentResponse *shared.GetEvidenceFoldersByAssessmentResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

