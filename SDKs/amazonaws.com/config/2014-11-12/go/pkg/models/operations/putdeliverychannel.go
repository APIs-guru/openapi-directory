package operations

import (
	"openapi/pkg/models/shared"
)

type PutDeliveryChannelXAmzTargetEnum string

const (
	PutDeliveryChannelXAmzTargetEnumStarlingDoveServicePutDeliveryChannel PutDeliveryChannelXAmzTargetEnum = "StarlingDoveService.PutDeliveryChannel"
)

type PutDeliveryChannelHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutDeliveryChannelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutDeliveryChannelRequest struct {
	Headers PutDeliveryChannelHeaders
	Request shared.PutDeliveryChannelRequest `request:"mediaType=application/json"`
}

type PutDeliveryChannelResponse struct {
	ContentType                                  string
	InsufficientDeliveryPolicyException          *interface{}
	InvalidDeliveryChannelNameException          *interface{}
	InvalidS3KeyPrefixException                  *interface{}
	InvalidS3KmsKeyArnException                  *interface{}
	InvalidSnsTopicArnException                  *interface{}
	MaxNumberOfDeliveryChannelsExceededException *interface{}
	NoAvailableConfigurationRecorderException    *interface{}
	NoSuchBucketException                        *interface{}
	StatusCode                                   int64
}
