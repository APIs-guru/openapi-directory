package operations

import (
	"openapi/pkg/models/shared"
)

type DenyCustomRoutingTrafficXAmzTargetEnum string

const (
	DenyCustomRoutingTrafficXAmzTargetEnumGlobalAcceleratorV20180706DenyCustomRoutingTraffic DenyCustomRoutingTrafficXAmzTargetEnum = "GlobalAccelerator_V20180706.DenyCustomRoutingTraffic"
)

type DenyCustomRoutingTrafficHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DenyCustomRoutingTrafficXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DenyCustomRoutingTrafficRequest struct {
	Headers DenyCustomRoutingTrafficHeaders
	Request shared.DenyCustomRoutingTrafficRequest `request:"mediaType=application/json"`
}

type DenyCustomRoutingTrafficResponse struct {
	ContentType                   string
	InternalServiceErrorException *interface{}
	InvalidArgumentException      *interface{}
	StatusCode                    int64
}
