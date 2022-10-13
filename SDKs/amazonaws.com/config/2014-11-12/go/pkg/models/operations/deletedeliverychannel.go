package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDeliveryChannelXAmzTargetEnum string

const (
	DeleteDeliveryChannelXAmzTargetEnumStarlingDoveServiceDeleteDeliveryChannel DeleteDeliveryChannelXAmzTargetEnum = "StarlingDoveService.DeleteDeliveryChannel"
)

type DeleteDeliveryChannelHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDeliveryChannelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDeliveryChannelRequest struct {
	Headers DeleteDeliveryChannelHeaders
	Request shared.DeleteDeliveryChannelRequest `request:"mediaType=application/json"`
}

type DeleteDeliveryChannelResponse struct {
	ContentType                              string
	LastDeliveryChannelDeleteFailedException *interface{}
	NoSuchDeliveryChannelException           *interface{}
	StatusCode                               int64
}
