package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStorageVirtualMachinesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeStorageVirtualMachinesXAmzTargetEnum string

const (
	DescribeStorageVirtualMachinesXAmzTargetEnumAwsSimbaAPIServiceV20180301DescribeStorageVirtualMachines DescribeStorageVirtualMachinesXAmzTargetEnum = "AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines"
)

type DescribeStorageVirtualMachinesHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeStorageVirtualMachinesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeStorageVirtualMachinesRequest struct {
	QueryParams DescribeStorageVirtualMachinesQueryParams
	Headers     DescribeStorageVirtualMachinesHeaders
	Request     shared.DescribeStorageVirtualMachinesRequest `request:"mediaType=application/json"`
}

type DescribeStorageVirtualMachinesResponse struct {
	BadRequest                             *interface{}
	ContentType                            string
	DescribeStorageVirtualMachinesResponse *shared.DescribeStorageVirtualMachinesResponse
	InternalServerError                    *interface{}
	StatusCode                             int64
	StorageVirtualMachineNotFound          *interface{}
}
