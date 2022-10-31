package operations

import (
"openapi/pkg/models/shared")

type BatchAcknowledgeAlarmHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type BatchAcknowledgeAlarmRequestBody struct {
    AcknowledgeActionRequests []shared.AcknowledgeAlarmActionRequest `json:"acknowledgeActionRequests"`
    
}

type BatchAcknowledgeAlarmRequest struct {
    Headers BatchAcknowledgeAlarmHeaders 
    Request BatchAcknowledgeAlarmRequestBody `request:"mediaType=application/json"`
    
}

type BatchAcknowledgeAlarmResponse struct {
    BatchAcknowledgeAlarmResponse *shared.BatchAcknowledgeAlarmResponse 
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

