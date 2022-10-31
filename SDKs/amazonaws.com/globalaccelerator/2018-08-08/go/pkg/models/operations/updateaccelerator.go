package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAcceleratorXAmzTargetEnum string

const (
	UpdateAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706UpdateAccelerator UpdateAcceleratorXAmzTargetEnum = "GlobalAccelerator_V20180706.UpdateAccelerator"
)

type UpdateAcceleratorHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAcceleratorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
