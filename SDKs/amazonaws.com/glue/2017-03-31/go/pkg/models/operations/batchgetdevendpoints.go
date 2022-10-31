package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetDevEndpointsXAmzTargetEnum string

const (
	BatchGetDevEndpointsXAmzTargetEnumAwsGlueBatchGetDevEndpoints BatchGetDevEndpointsXAmzTargetEnum = "AWSGlue.BatchGetDevEndpoints"
)

type BatchGetDevEndpointsHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetDevEndpointsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type BatchGetDevEndpointsRequest struct {
	Headers BatchGetDevEndpointsHeaders
	Request shared.BatchGetDevEndpointsRequest `request:"mediaType=application/json"`
}

type BatchGetDevEndpointsResponse struct {
	AccessDeniedException        *interface{}
	BatchGetDevEndpointsResponse *shared.BatchGetDevEndpointsResponse
	ContentType                  string
	InternalServiceException     *interface{}
	InvalidInputException        *interface{}
	OperationTimeoutException    *interface{}
	StatusCode                   int64
}
