package operations

import (
"openapi/pkg/models/shared")


type TagDeliveryStreamXAmzTargetEnum string

const (
    TagDeliveryStreamXAmzTargetEnumFirehose20150804TagDeliveryStream TagDeliveryStreamXAmzTargetEnum = "Firehose_20150804.TagDeliveryStream"
)


type TagDeliveryStreamHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget TagDeliveryStreamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type TagDeliveryStreamRequest struct {
    Headers TagDeliveryStreamHeaders 
    Request shared.TagDeliveryStreamInput `request:"mediaType=application/json"`
    
}

type TagDeliveryStreamResponse struct {
    ContentType string 
    InvalidArgumentException *interface{} 
    LimitExceededException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TagDeliveryStreamOutput map[string]interface{} 
    
}

