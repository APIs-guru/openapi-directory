package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStorageVirtualMachineXAmzTargetEnum string

const (
	DeleteStorageVirtualMachineXAmzTargetEnumAwsSimbaAPIServiceV20180301DeleteStorageVirtualMachine DeleteStorageVirtualMachineXAmzTargetEnum = "AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine"
)

type DeleteStorageVirtualMachineHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteStorageVirtualMachineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteStorageVirtualMachineRequest struct {
	Headers DeleteStorageVirtualMachineHeaders
	Request shared.DeleteStorageVirtualMachineRequest `request:"mediaType=application/json"`
}

type DeleteStorageVirtualMachineResponse struct {
	BadRequest                          *interface{}
	ContentType                         string
	DeleteStorageVirtualMachineResponse *shared.DeleteStorageVirtualMachineResponse
	IncompatibleParameterError          *interface{}
	InternalServerError                 *interface{}
	StatusCode                          int64
	StorageVirtualMachineNotFound       *interface{}
}
