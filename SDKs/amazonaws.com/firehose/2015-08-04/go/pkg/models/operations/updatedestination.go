package operations

import (
"openapi/pkg/models/shared")


type UpdateDestinationXAmzTargetEnum string

const (
    UpdateDestinationXAmzTargetEnumFirehose20150804UpdateDestination UpdateDestinationXAmzTargetEnum = "Firehose_20150804.UpdateDestination"
)


type UpdateDestinationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateDestinationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateDestinationRequest struct {
    Headers UpdateDestinationHeaders 
    Request shared.UpdateDestinationInput `request:"mediaType=application/json"`
    
}

type UpdateDestinationResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    InvalidArgumentException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateDestinationOutput map[string]interface{} 
    
}

