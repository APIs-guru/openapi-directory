package operations

import (
"openapi/pkg/models/shared")


type CreateAgentXAmzTargetEnum string

const (
    CreateAgentXAmzTargetEnumFmrsServiceCreateAgent CreateAgentXAmzTargetEnum = "FmrsService.CreateAgent"
)


type CreateAgentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateAgentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateAgentRequest struct {
    Headers CreateAgentHeaders 
    Request shared.CreateAgentRequest `request:"mediaType=application/json"`
    
}

type CreateAgentResponse struct {
    ContentType string 
    CreateAgentResponse *shared.CreateAgentResponse 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

