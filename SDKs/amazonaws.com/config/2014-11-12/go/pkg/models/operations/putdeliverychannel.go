package operations

import (
"openapi/pkg/models/shared")


type PutDeliveryChannelXAmzTargetEnum string

const (
    PutDeliveryChannelXAmzTargetEnumStarlingDoveServicePutDeliveryChannel PutDeliveryChannelXAmzTargetEnum = "StarlingDoveService.PutDeliveryChannel"
)


type PutDeliveryChannelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutDeliveryChannelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutDeliveryChannelRequest struct {
    Headers PutDeliveryChannelHeaders 
    Request shared.PutDeliveryChannelRequest `request:"mediaType=application/json"`
    
}

type PutDeliveryChannelResponse struct {
    ContentType string 
    InsufficientDeliveryPolicyException *interface{} 
    InvalidDeliveryChannelNameException *interface{} 
    InvalidS3KeyPrefixException *interface{} 
    InvalidS3KmsKeyArnException *interface{} 
    InvalidSnsTopicArnException *interface{} 
    MaxNumberOfDeliveryChannelsExceededException *interface{} 
    NoAvailableConfigurationRecorderException *interface{} 
    NoSuchBucketException *interface{} 
    StatusCode int64 
    
}

