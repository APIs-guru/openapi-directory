package operations

import (
"openapi/pkg/models/shared")

type StartThingRegistrationTaskHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type StartThingRegistrationTaskRequestBody struct {
    InputFileBucket string `json:"inputFileBucket"`
    InputFileKey string `json:"inputFileKey"`
    RoleArn string `json:"roleArn"`
    TemplateBody string `json:"templateBody"`
    
}

type StartThingRegistrationTaskRequest struct {
    Headers StartThingRegistrationTaskHeaders 
    Request StartThingRegistrationTaskRequestBody `request:"mediaType=application/json"`
    
}

type StartThingRegistrationTaskResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    StartThingRegistrationTaskResponse *shared.StartThingRegistrationTaskResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    
}

