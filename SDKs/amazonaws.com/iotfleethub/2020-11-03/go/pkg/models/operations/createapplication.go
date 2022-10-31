package operations

import (
"openapi/pkg/models/shared")

type CreateApplicationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateApplicationRequestBody struct {
    ApplicationDescription *string `json:"applicationDescription,omitempty"`
    ApplicationName string `json:"applicationName"`
    ClientToken *string `json:"clientToken,omitempty"`
    RoleArn string `json:"roleArn"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateApplicationRequest struct {
    Headers CreateApplicationHeaders 
    Request CreateApplicationRequestBody `request:"mediaType=application/json"`
    
}

type CreateApplicationResponse struct {
    ContentType string 
    CreateApplicationResponse *shared.CreateApplicationResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

