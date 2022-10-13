package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVolumeXAmzTargetEnum string

const (
	CreateVolumeXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateVolume CreateVolumeXAmzTargetEnum = "AWSSimbaAPIService_v20180301.CreateVolume"
)

type CreateVolumeHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateVolumeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateVolumeRequest struct {
	Headers CreateVolumeHeaders
	Request shared.CreateVolumeRequest `request:"mediaType=application/json"`
}

type CreateVolumeResponse struct {
	BadRequest                    *interface{}
	ContentType                   string
	CreateVolumeResponse          *shared.CreateVolumeResponse
	FileSystemNotFound            *interface{}
	IncompatibleParameterError    *interface{}
	InternalServerError           *interface{}
	MissingVolumeConfiguration    *interface{}
	ServiceLimitExceeded          *interface{}
	StatusCode                    int64
	StorageVirtualMachineNotFound *interface{}
	UnsupportedOperation          *interface{}
}
