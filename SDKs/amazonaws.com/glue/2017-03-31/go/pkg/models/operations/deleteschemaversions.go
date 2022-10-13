package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSchemaVersionsXAmzTargetEnum string

const (
	DeleteSchemaVersionsXAmzTargetEnumAwsGlueDeleteSchemaVersions DeleteSchemaVersionsXAmzTargetEnum = "AWSGlue.DeleteSchemaVersions"
)

type DeleteSchemaVersionsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSchemaVersionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteSchemaVersionsRequest struct {
	Headers DeleteSchemaVersionsHeaders
	Request shared.DeleteSchemaVersionsInput `request:"mediaType=application/json"`
}

type DeleteSchemaVersionsResponse struct {
	AccessDeniedException           *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteSchemaVersionsResponse    *shared.DeleteSchemaVersionsResponse
	EntityNotFoundException         *interface{}
	InvalidInputException           *interface{}
	StatusCode                      int64
}
