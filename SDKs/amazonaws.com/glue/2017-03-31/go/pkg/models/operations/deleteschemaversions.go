package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSchemaVersionsXAmzTargetEnum string

const (
	DeleteSchemaVersionsXAmzTargetEnumAwsGlueDeleteSchemaVersions DeleteSchemaVersionsXAmzTargetEnum = "AWSGlue.DeleteSchemaVersions"
)

type DeleteSchemaVersionsHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSchemaVersionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
