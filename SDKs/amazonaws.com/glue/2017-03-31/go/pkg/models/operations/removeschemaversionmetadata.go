package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveSchemaVersionMetadataXAmzTargetEnum string

const (
	RemoveSchemaVersionMetadataXAmzTargetEnumAwsGlueRemoveSchemaVersionMetadata RemoveSchemaVersionMetadataXAmzTargetEnum = "AWSGlue.RemoveSchemaVersionMetadata"
)

type RemoveSchemaVersionMetadataHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveSchemaVersionMetadataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RemoveSchemaVersionMetadataRequest struct {
	Headers RemoveSchemaVersionMetadataHeaders
	Request shared.RemoveSchemaVersionMetadataInput `request:"mediaType=application/json"`
}

type RemoveSchemaVersionMetadataResponse struct {
	AccessDeniedException               *interface{}
	ContentType                         string
	EntityNotFoundException             *interface{}
	InvalidInputException               *interface{}
	RemoveSchemaVersionMetadataResponse *shared.RemoveSchemaVersionMetadataResponse
	StatusCode                          int64
}
