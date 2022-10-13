package operations

import (
	"openapi/pkg/models/shared"
)

type GetMappingXAmzTargetEnum string

const (
	GetMappingXAmzTargetEnumAwsGlueGetMapping GetMappingXAmzTargetEnum = "AWSGlue.GetMapping"
)

type GetMappingHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetMappingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetMappingRequest struct {
	Headers GetMappingHeaders
	Request shared.GetMappingRequest `request:"mediaType=application/json"`
}

type GetMappingResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetMappingResponse        *shared.GetMappingResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
