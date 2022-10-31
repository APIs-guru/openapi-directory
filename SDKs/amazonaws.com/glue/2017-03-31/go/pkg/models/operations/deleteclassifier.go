package operations

import (
"openapi/pkg/models/shared")


type DeleteClassifierXAmzTargetEnum string

const (
    DeleteClassifierXAmzTargetEnumAwsGlueDeleteClassifier DeleteClassifierXAmzTargetEnum = "AWSGlue.DeleteClassifier"
)


type DeleteClassifierHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteClassifierXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteClassifierRequest struct {
    Headers DeleteClassifierHeaders 
    Request shared.DeleteClassifierRequest `request:"mediaType=application/json"`
    
}

type DeleteClassifierResponse struct {
    ContentType string 
    DeleteClassifierResponse map[string]interface{} 
    EntityNotFoundException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

