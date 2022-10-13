package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDatabaseXAmzTargetEnum string

const (
	UpdateDatabaseXAmzTargetEnumAwsGlueUpdateDatabase UpdateDatabaseXAmzTargetEnum = "AWSGlue.UpdateDatabase"
)

type UpdateDatabaseHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDatabaseXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateDatabaseRequest struct {
	Headers UpdateDatabaseHeaders
	Request shared.UpdateDatabaseRequest `request:"mediaType=application/json"`
}

type UpdateDatabaseResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	EntityNotFoundException         *interface{}
	GlueEncryptionException         *interface{}
	InternalServiceException        *interface{}
	InvalidInputException           *interface{}
	OperationTimeoutException       *interface{}
	StatusCode                      int64
	UpdateDatabaseResponse          map[string]interface{}
}
