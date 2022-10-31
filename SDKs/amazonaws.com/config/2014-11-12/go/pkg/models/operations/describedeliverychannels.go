package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDeliveryChannelsXAmzTargetEnum string

const (
	DescribeDeliveryChannelsXAmzTargetEnumStarlingDoveServiceDescribeDeliveryChannels DescribeDeliveryChannelsXAmzTargetEnum = "StarlingDoveService.DescribeDeliveryChannels"
)

type DescribeDeliveryChannelsHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDeliveryChannelsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
