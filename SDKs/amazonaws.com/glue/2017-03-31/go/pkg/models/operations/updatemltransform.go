package operations

import (
"openapi/pkg/models/shared")


type UpdateMlTransformXAmzTargetEnum string

const (
    UpdateMlTransformXAmzTargetEnumAwsGlueUpdateMlTransform UpdateMlTransformXAmzTargetEnum = "AWSGlue.UpdateMLTransform"
)


type UpdateMlTransformHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateMlTransformXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateMlTransformRequest struct {
    Headers UpdateMlTransformHeaders 
    Request shared.UpdateMlTransformRequest `request:"mediaType=application/json"`
    
}

type UpdateMlTransformResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    EntityNotFoundException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    UpdateMlTransformResponse *shared.UpdateMlTransformResponse 
    
}

