package operations

import (
"openapi/pkg/models/shared")


type CreateMlTransformXAmzTargetEnum string

const (
    CreateMlTransformXAmzTargetEnumAwsGlueCreateMlTransform CreateMlTransformXAmzTargetEnum = "AWSGlue.CreateMLTransform"
)


type CreateMlTransformHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateMlTransformXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateMlTransformRequest struct {
    Headers CreateMlTransformHeaders 
    Request shared.CreateMlTransformRequest `request:"mediaType=application/json"`
    
}

type CreateMlTransformResponse struct {
    AccessDeniedException *interface{} 
    AlreadyExistsException *interface{} 
    ContentType string 
    CreateMlTransformResponse *shared.CreateMlTransformResponse 
    IdempotentParameterMismatchException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    ResourceNumberLimitExceededException *interface{} 
    StatusCode int64 
    
}

