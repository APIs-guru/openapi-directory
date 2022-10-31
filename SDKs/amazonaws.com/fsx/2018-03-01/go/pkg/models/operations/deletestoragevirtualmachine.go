package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStorageVirtualMachineXAmzTargetEnum string

const (
	DeleteStorageVirtualMachineXAmzTargetEnumAwsSimbaAPIServiceV20180301DeleteStorageVirtualMachine DeleteStorageVirtualMachineXAmzTargetEnum = "AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine"
)

type DeleteStorageVirtualMachineHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteStorageVirtualMachineXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
