package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCustomRoutingAcceleratorXAmzTargetEnum string

const (
	UpdateCustomRoutingAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706UpdateCustomRoutingAccelerator UpdateCustomRoutingAcceleratorXAmzTargetEnum = "GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator"
)

type UpdateCustomRoutingAcceleratorHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateCustomRoutingAcceleratorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateCustomRoutingAcceleratorRequest struct {
	Headers UpdateCustomRoutingAcceleratorHeaders
	Request shared.UpdateCustomRoutingAcceleratorRequest `request:"mediaType=application/json"`
}

type UpdateCustomRoutingAcceleratorResponse struct {
	AcceleratorNotFoundException           *interface{}
	ContentType                            string
	InternalServiceErrorException          *interface{}
	InvalidArgumentException               *interface{}
	StatusCode                             int64
	UpdateCustomRoutingAcceleratorResponse *shared.UpdateCustomRoutingAcceleratorResponse
}
