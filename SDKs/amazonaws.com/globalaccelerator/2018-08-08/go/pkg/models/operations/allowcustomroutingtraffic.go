package operations

import (
	"openapi/pkg/models/shared"
)

type AllowCustomRoutingTrafficXAmzTargetEnum string

const (
	AllowCustomRoutingTrafficXAmzTargetEnumGlobalAcceleratorV20180706AllowCustomRoutingTraffic AllowCustomRoutingTrafficXAmzTargetEnum = "GlobalAccelerator_V20180706.AllowCustomRoutingTraffic"
)

type AllowCustomRoutingTrafficHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AllowCustomRoutingTrafficXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
