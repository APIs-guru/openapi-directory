package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteJobXAmzTargetEnum string

const (
	DeleteJobXAmzTargetEnumAwsGlueDeleteJob DeleteJobXAmzTargetEnum = "AWSGlue.DeleteJob"
)

type DeleteJobHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteJobRequest struct {
	Headers DeleteJobHeaders
	Request shared.DeleteJobRequest `request:"mediaType=application/json"`
}

type DeleteJobResponse struct {
	ContentType               string
	DeleteJobResponse         *shared.DeleteJobResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
