package operations

import (
	"openapi/pkg/models/shared"
)

type AllowCustomRoutingTrafficXAmzTargetEnum string

const (
	AllowCustomRoutingTrafficXAmzTargetEnumGlobalAcceleratorV20180706AllowCustomRoutingTraffic AllowCustomRoutingTrafficXAmzTargetEnum = "GlobalAccelerator_V20180706.AllowCustomRoutingTraffic"
)

type AllowCustomRoutingTrafficHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AllowCustomRoutingTrafficXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AllowCustomRoutingTrafficRequest struct {
	Headers AllowCustomRoutingTrafficHeaders
	Request shared.AllowCustomRoutingTrafficRequest `request:"mediaType=application/json"`
}

type AllowCustomRoutingTrafficResponse struct {
	ContentType                   string
	InternalServiceErrorException *interface{}
	InvalidArgumentException      *interface{}
	StatusCode                    int64
}
