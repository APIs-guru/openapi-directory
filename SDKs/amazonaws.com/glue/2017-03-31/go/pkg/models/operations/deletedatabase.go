package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDatabaseXAmzTargetEnum string

const (
	DeleteDatabaseXAmzTargetEnumAwsGlueDeleteDatabase DeleteDatabaseXAmzTargetEnum = "AWSGlue.DeleteDatabase"
)

type DeleteDatabaseHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDatabaseXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDatabaseRequest struct {
	Headers DeleteDatabaseHeaders
	Request shared.DeleteDatabaseRequest `request:"mediaType=application/json"`
}

type DeleteDatabaseResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteDatabaseResponse          map[string]interface{}
	EntityNotFoundException         *interface{}
	InternalServiceException        *interface{}
	InvalidInputException           *interface{}
	OperationTimeoutException       *interface{}
	StatusCode                      int64
}
