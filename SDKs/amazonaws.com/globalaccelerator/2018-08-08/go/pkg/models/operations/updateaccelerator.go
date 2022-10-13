package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAcceleratorXAmzTargetEnum string

const (
	UpdateAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706UpdateAccelerator UpdateAcceleratorXAmzTargetEnum = "GlobalAccelerator_V20180706.UpdateAccelerator"
)

type UpdateAcceleratorHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAcceleratorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateAcceleratorRequest struct {
	Headers UpdateAcceleratorHeaders
	Request shared.UpdateAcceleratorRequest `request:"mediaType=application/json"`
}

type UpdateAcceleratorResponse struct {
	AcceleratorNotFoundException  *interface{}
	ContentType                   string
	InternalServiceErrorException *interface{}
	InvalidArgumentException      *interface{}
	StatusCode                    int64
	UpdateAcceleratorResponse     *shared.UpdateAcceleratorResponse
}
