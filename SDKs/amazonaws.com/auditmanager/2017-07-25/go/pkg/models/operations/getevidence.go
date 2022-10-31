package operations

import (
"openapi/pkg/models/shared")

type GetEvidencePathParams struct {
    AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
    ControlSetID string `pathParam:"style=simple,explode=false,name=controlSetId"`
    EvidenceFolderID string `pathParam:"style=simple,explode=false,name=evidenceFolderId"`
    EvidenceID string `pathParam:"style=simple,explode=false,name=evidenceId"`
    
}

type GetEvidenceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetEvidenceRequest struct {
    PathParams GetEvidencePathParams 
    Headers GetEvidenceHeaders 
    
}

type GetEvidenceResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetEvidenceResponse *shared.GetEvidenceResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

