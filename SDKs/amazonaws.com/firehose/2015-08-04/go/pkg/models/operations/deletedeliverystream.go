package operations

import (
"openapi/pkg/models/shared")


type DeleteDeliveryStreamXAmzTargetEnum string

const (
    DeleteDeliveryStreamXAmzTargetEnumFirehose20150804DeleteDeliveryStream DeleteDeliveryStreamXAmzTargetEnum = "Firehose_20150804.DeleteDeliveryStream"
)


type DeleteDeliveryStreamHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteDeliveryStreamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteDeliveryStreamRequest struct {
    Headers DeleteDeliveryStreamHeaders 
    Request shared.DeleteDeliveryStreamInput `request:"mediaType=application/json"`
    
}

type DeleteDeliveryStreamResponse struct {
    ContentType string 
    DeleteDeliveryStreamOutput map[string]interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

