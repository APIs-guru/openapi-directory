package operations

import (
"openapi/pkg/models/shared")

type StartOnDemandAuditTaskHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type StartOnDemandAuditTaskRequestBody struct {
    TargetCheckNames []string `json:"targetCheckNames"`
    
}

type StartOnDemandAuditTaskRequest struct {
    Headers StartOnDemandAuditTaskHeaders 
    Request StartOnDemandAuditTaskRequestBody `request:"mediaType=application/json"`
    
}

type StartOnDemandAuditTaskResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    StartOnDemandAuditTaskResponse *shared.StartOnDemandAuditTaskResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

