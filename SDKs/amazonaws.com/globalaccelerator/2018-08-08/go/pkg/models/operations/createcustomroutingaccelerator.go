package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCustomRoutingAcceleratorXAmzTargetEnum string

const (
	CreateCustomRoutingAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706CreateCustomRoutingAccelerator CreateCustomRoutingAcceleratorXAmzTargetEnum = "GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator"
)

type CreateCustomRoutingAcceleratorHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCustomRoutingAcceleratorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateCustomRoutingAcceleratorRequest struct {
	Headers CreateCustomRoutingAcceleratorHeaders
	Request shared.CreateCustomRoutingAcceleratorRequest `request:"mediaType=application/json"`
}

type CreateCustomRoutingAcceleratorResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	CreateCustomRoutingAcceleratorResponse *shared.CreateCustomRoutingAcceleratorResponse
	InternalServiceErrorException          *interface{}
	InvalidArgumentException               *interface{}
	LimitExceededException                 *interface{}
	StatusCode                             int64
}
