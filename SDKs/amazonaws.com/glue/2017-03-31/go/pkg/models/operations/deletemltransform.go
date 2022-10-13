package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMlTransformXAmzTargetEnum string

const (
	DeleteMlTransformXAmzTargetEnumAwsGlueDeleteMlTransform DeleteMlTransformXAmzTargetEnum = "AWSGlue.DeleteMLTransform"
)

type DeleteMlTransformHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteMlTransformXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteMlTransformRequest struct {
	Headers DeleteMlTransformHeaders
	Request shared.DeleteMlTransformRequest `request:"mediaType=application/json"`
}

type DeleteMlTransformResponse struct {
	ContentType               string
	DeleteMlTransformResponse *shared.DeleteMlTransformResponse
	EntityNotFoundException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
