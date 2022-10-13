package operations

import (
	"openapi/pkg/models/shared"
)

type StartSchemaExtensionXAmzTargetEnum string

const (
	StartSchemaExtensionXAmzTargetEnumDirectoryService20150416StartSchemaExtension StartSchemaExtensionXAmzTargetEnum = "DirectoryService_20150416.StartSchemaExtension"
)

type StartSchemaExtensionHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartSchemaExtensionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartSchemaExtensionRequest struct {
	Headers StartSchemaExtensionHeaders
	Request shared.StartSchemaExtensionRequest `request:"mediaType=application/json"`
}

type StartSchemaExtensionResponse struct {
	ClientException                *interface{}
	ContentType                    string
	DirectoryUnavailableException  *interface{}
	EntityDoesNotExistException    *interface{}
	InvalidParameterException      *interface{}
	ServiceException               *interface{}
	SnapshotLimitExceededException *interface{}
	StartSchemaExtensionResult     *shared.StartSchemaExtensionResult
	StatusCode                     int64
}
