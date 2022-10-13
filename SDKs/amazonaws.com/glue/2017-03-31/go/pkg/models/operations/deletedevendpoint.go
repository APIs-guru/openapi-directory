package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDevEndpointXAmzTargetEnum string

const (
	DeleteDevEndpointXAmzTargetEnumAwsGlueDeleteDevEndpoint DeleteDevEndpointXAmzTargetEnum = "AWSGlue.DeleteDevEndpoint"
)

type DeleteDevEndpointHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDevEndpointXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDevEndpointRequest struct {
	Headers DeleteDevEndpointHeaders
	Request shared.DeleteDevEndpointRequest `request:"mediaType=application/json"`
}

type DeleteDevEndpointResponse struct {
	ContentType               string
	DeleteDevEndpointResponse map[string]interface{}
	EntityNotFoundException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
