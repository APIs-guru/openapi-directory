package operations

import (
"openapi/pkg/models/shared")


type GetClassifierXAmzTargetEnum string

const (
    GetClassifierXAmzTargetEnumAwsGlueGetClassifier GetClassifierXAmzTargetEnum = "AWSGlue.GetClassifier"
)


type GetClassifierHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetClassifierXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetClassifierRequest struct {
    Headers GetClassifierHeaders 
    Request shared.GetClassifierRequest `request:"mediaType=application/json"`
    
}

type GetClassifierResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    GetClassifierResponse *shared.GetClassifierResponse 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

