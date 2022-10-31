package operations

import (
"openapi/pkg/models/shared")


type CreateApplicationXAmzTargetEnum string

const (
    CreateApplicationXAmzTargetEnumCodeDeploy20141006CreateApplication CreateApplicationXAmzTargetEnum = "CodeDeploy_20141006.CreateApplication"
)


type CreateApplicationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateApplicationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateApplicationRequest struct {
    Headers CreateApplicationHeaders 
    Request shared.CreateApplicationInput `request:"mediaType=application/json"`
    
}

type CreateApplicationResponse struct {
    ApplicationAlreadyExistsException *interface{} 
    ApplicationLimitExceededException *interface{} 
    ApplicationNameRequiredException *interface{} 
    ContentType string 
    CreateApplicationOutput *shared.CreateApplicationOutput 
    InvalidApplicationNameException *interface{} 
    InvalidComputePlatformException *interface{} 
    InvalidTagsToAddException *interface{} 
    StatusCode int64 
    
}

