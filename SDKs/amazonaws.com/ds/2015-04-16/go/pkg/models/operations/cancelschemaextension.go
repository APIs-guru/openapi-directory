package operations

import (
	"openapi/pkg/models/shared"
)

type CancelSchemaExtensionXAmzTargetEnum string

const (
	CancelSchemaExtensionXAmzTargetEnumDirectoryService20150416CancelSchemaExtension CancelSchemaExtensionXAmzTargetEnum = "DirectoryService_20150416.CancelSchemaExtension"
)

type CancelSchemaExtensionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelSchemaExtensionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CancelSchemaExtensionRequest struct {
	Headers CancelSchemaExtensionHeaders
	Request shared.CancelSchemaExtensionRequest `request:"mediaType=application/json"`
}

type CancelSchemaExtensionResponse struct {
	CancelSchemaExtensionResult map[string]interface{}
	ClientException             *interface{}
	ContentType                 string
	EntityDoesNotExistException *interface{}
	ServiceException            *interface{}
	StatusCode                  int64
}
