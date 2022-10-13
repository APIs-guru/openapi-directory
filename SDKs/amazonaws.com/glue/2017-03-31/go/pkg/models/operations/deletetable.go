package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTableXAmzTargetEnum string

const (
	DeleteTableXAmzTargetEnumAwsGlueDeleteTable DeleteTableXAmzTargetEnum = "AWSGlue.DeleteTable"
)

type DeleteTableHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTableXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteTableRequest struct {
	Headers DeleteTableHeaders
	Request shared.DeleteTableRequest `request:"mediaType=application/json"`
}

type DeleteTableResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteTableResponse             map[string]interface{}
	EntityNotFoundException         *interface{}
	InternalServiceException        *interface{}
	InvalidInputException           *interface{}
	OperationTimeoutException       *interface{}
	StatusCode                      int64
}
