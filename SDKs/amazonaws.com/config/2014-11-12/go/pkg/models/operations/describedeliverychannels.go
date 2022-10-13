package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDeliveryChannelsXAmzTargetEnum string

const (
	DescribeDeliveryChannelsXAmzTargetEnumStarlingDoveServiceDescribeDeliveryChannels DescribeDeliveryChannelsXAmzTargetEnum = "StarlingDoveService.DescribeDeliveryChannels"
)

type DescribeDeliveryChannelsHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDeliveryChannelsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDeliveryChannelsRequest struct {
	Headers DescribeDeliveryChannelsHeaders
	Request shared.DescribeDeliveryChannelsRequest `request:"mediaType=application/json"`
}

type DescribeDeliveryChannelsResponse struct {
	ContentType                      string
	DescribeDeliveryChannelsResponse *shared.DescribeDeliveryChannelsResponse
	NoSuchDeliveryChannelException   *interface{}
	StatusCode                       int64
}
