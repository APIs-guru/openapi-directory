package operations

import (
	"openapi/pkg/models/shared"
)

type CancelSchemaExtensionXAmzTargetEnum string

const (
	CancelSchemaExtensionXAmzTargetEnumDirectoryService20150416CancelSchemaExtension CancelSchemaExtensionXAmzTargetEnum = "DirectoryService_20150416.CancelSchemaExtension"
)

type CancelSchemaExtensionHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelSchemaExtensionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
