package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDevEndpointXAmzTargetEnum string

const (
	UpdateDevEndpointXAmzTargetEnumAwsGlueUpdateDevEndpoint UpdateDevEndpointXAmzTargetEnum = "AWSGlue.UpdateDevEndpoint"
)

type UpdateDevEndpointHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDevEndpointXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateDevEndpointRequest struct {
	Headers UpdateDevEndpointHeaders
	Request shared.UpdateDevEndpointRequest `request:"mediaType=application/json"`
}

type UpdateDevEndpointResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
	UpdateDevEndpointResponse map[string]interface{}
	ValidationException       *interface{}
}
