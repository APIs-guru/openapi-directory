package operations

import (
	"openapi/pkg/models/shared"
)

type QuerySchemaVersionMetadataXAmzTargetEnum string

const (
	QuerySchemaVersionMetadataXAmzTargetEnumAwsGlueQuerySchemaVersionMetadata QuerySchemaVersionMetadataXAmzTargetEnum = "AWSGlue.QuerySchemaVersionMetadata"
)

type QuerySchemaVersionMetadataHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        QuerySchemaVersionMetadataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type QuerySchemaVersionMetadataRequest struct {
	Headers QuerySchemaVersionMetadataHeaders
	Request shared.QuerySchemaVersionMetadataInput `request:"mediaType=application/json"`
}

type QuerySchemaVersionMetadataResponse struct {
	AccessDeniedException              *interface{}
	ContentType                        string
	EntityNotFoundException            *interface{}
	InvalidInputException              *interface{}
	QuerySchemaVersionMetadataResponse *shared.QuerySchemaVersionMetadataResponse
	StatusCode                         int64
}
