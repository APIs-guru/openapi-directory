package operations

import (
"openapi/pkg/models/shared")

type StartAuditMitigationActionsTaskPathParams struct {
    TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
    
}

type StartAuditMitigationActionsTaskHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type StartAuditMitigationActionsTaskRequestBodyTarget struct {
    AuditCheckToReasonCodeFilter map[string][]string `json:"auditCheckToReasonCodeFilter,omitempty"`
    AuditTaskID *string `json:"auditTaskId,omitempty"`
    FindingIds []string `json:"findingIds,omitempty"`
    
}

type StartAuditMitigationActionsTaskRequestBody struct {
    AuditCheckToActionsMapping map[string][]string `json:"auditCheckToActionsMapping"`
    ClientRequestToken string `json:"clientRequestToken"`
    Target StartAuditMitigationActionsTaskRequestBodyTarget `json:"target"`
    
}

type StartAuditMitigationActionsTaskRequest struct {
    PathParams StartAuditMitigationActionsTaskPathParams 
    Headers StartAuditMitigationActionsTaskHeaders 
    Request StartAuditMitigationActionsTaskRequestBody `request:"mediaType=application/json"`
    
}

type StartAuditMitigationActionsTaskResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    StartAuditMitigationActionsTaskResponse *shared.StartAuditMitigationActionsTaskResponse 
    StatusCode int64 
    TaskAlreadyExistsException *interface{} 
    ThrottlingException *interface{} 
    
}

