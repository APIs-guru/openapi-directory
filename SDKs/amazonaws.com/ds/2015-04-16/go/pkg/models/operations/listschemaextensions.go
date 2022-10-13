package operations

import (
	"openapi/pkg/models/shared"
)

type ListSchemaExtensionsXAmzTargetEnum string

const (
	ListSchemaExtensionsXAmzTargetEnumDirectoryService20150416ListSchemaExtensions ListSchemaExtensionsXAmzTargetEnum = "DirectoryService_20150416.ListSchemaExtensions"
)

type ListSchemaExtensionsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSchemaExtensionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListSchemaExtensionsRequest struct {
	Headers ListSchemaExtensionsHeaders
	Request shared.ListSchemaExtensionsRequest `request:"mediaType=application/json"`
}

type ListSchemaExtensionsResponse struct {
	ClientException             *interface{}
	ContentType                 string
	EntityDoesNotExistException *interface{}
	InvalidNextTokenException   *interface{}
	ListSchemaExtensionsResult  *shared.ListSchemaExtensionsResult
	ServiceException            *interface{}
	StatusCode                  int64
}
