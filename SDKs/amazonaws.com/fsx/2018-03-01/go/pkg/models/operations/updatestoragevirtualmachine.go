package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStorageVirtualMachineXAmzTargetEnum string

const (
	UpdateStorageVirtualMachineXAmzTargetEnumAwsSimbaAPIServiceV20180301UpdateStorageVirtualMachine UpdateStorageVirtualMachineXAmzTargetEnum = "AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine"
)

type UpdateStorageVirtualMachineHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateStorageVirtualMachineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateStorageVirtualMachineRequest struct {
	Headers UpdateStorageVirtualMachineHeaders
	Request shared.UpdateStorageVirtualMachineRequest `request:"mediaType=application/json"`
}

type UpdateStorageVirtualMachineResponse struct {
	BadRequest                          *interface{}
	ContentType                         string
	IncompatibleParameterError          *interface{}
	InternalServerError                 *interface{}
	StatusCode                          int64
	StorageVirtualMachineNotFound       *interface{}
	UnsupportedOperation                *interface{}
	UpdateStorageVirtualMachineResponse *shared.UpdateStorageVirtualMachineResponse
}
