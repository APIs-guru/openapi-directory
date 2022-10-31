package operations

import (
"openapi/pkg/models/shared")

type UpdateJobQueueHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type UpdateJobQueueRequestBodyStateEnum string

const (
    UpdateJobQueueRequestBodyStateEnumEnabled UpdateJobQueueRequestBodyStateEnum = "ENABLED"
UpdateJobQueueRequestBodyStateEnumDisabled UpdateJobQueueRequestBodyStateEnum = "DISABLED"
)


type UpdateJobQueueRequestBody struct {
    ComputeEnvironmentOrder []shared.ComputeEnvironmentOrder `json:"computeEnvironmentOrder,omitempty"`
    JobQueue string `json:"jobQueue"`
    Priority *int64 `json:"priority,omitempty"`
    State *UpdateJobQueueRequestBodyStateEnum `json:"state,omitempty"`
    
}

type UpdateJobQueueRequest struct {
    Headers UpdateJobQueueHeaders 
    Request UpdateJobQueueRequestBody `request:"mediaType=application/json"`
    
}

type UpdateJobQueueResponse struct {
    ClientException *interface{} 
    ContentType string 
    ServerException *interface{} 
    StatusCode int64 
    UpdateJobQueueResponse *shared.UpdateJobQueueResponse 
    
}

