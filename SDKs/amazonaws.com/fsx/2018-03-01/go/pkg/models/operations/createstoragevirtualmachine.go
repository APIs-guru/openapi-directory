package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStorageVirtualMachineXAmzTargetEnum string

const (
	CreateStorageVirtualMachineXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateStorageVirtualMachine CreateStorageVirtualMachineXAmzTargetEnum = "AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine"
)

type CreateStorageVirtualMachineHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateStorageVirtualMachineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateStorageVirtualMachineRequest struct {
	Headers CreateStorageVirtualMachineHeaders
	Request shared.CreateStorageVirtualMachineRequest `request:"mediaType=application/json"`
}

type CreateStorageVirtualMachineResponse struct {
	ActiveDirectoryError                *interface{}
	BadRequest                          *interface{}
	ContentType                         string
	CreateStorageVirtualMachineResponse *shared.CreateStorageVirtualMachineResponse
	FileSystemNotFound                  *interface{}
	IncompatibleParameterError          *interface{}
	InternalServerError                 *interface{}
	ServiceLimitExceeded                *interface{}
	StatusCode                          int64
	UnsupportedOperation                *interface{}
}
