package operations

import (
	"openapi/pkg/models/shared"
)

type PutSchemaVersionMetadataXAmzTargetEnum string

const (
	PutSchemaVersionMetadataXAmzTargetEnumAwsGluePutSchemaVersionMetadata PutSchemaVersionMetadataXAmzTargetEnum = "AWSGlue.PutSchemaVersionMetadata"
)

type PutSchemaVersionMetadataHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutSchemaVersionMetadataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutSchemaVersionMetadataRequest struct {
	Headers PutSchemaVersionMetadataHeaders
	Request shared.PutSchemaVersionMetadataInput `request:"mediaType=application/json"`
}

type PutSchemaVersionMetadataResponse struct {
	AccessDeniedException                *interface{}
	AlreadyExistsException               *interface{}
	ContentType                          string
	EntityNotFoundException              *interface{}
	InvalidInputException                *interface{}
	PutSchemaVersionMetadataResponse     *shared.PutSchemaVersionMetadataResponse
	ResourceNumberLimitExceededException *interface{}
	StatusCode                           int64
}
