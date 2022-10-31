package operations

import (
	"openapi/pkg/models/shared"
)

type ListSchemaExtensionsXAmzTargetEnum string

const (
	ListSchemaExtensionsXAmzTargetEnumDirectoryService20150416ListSchemaExtensions ListSchemaExtensionsXAmzTargetEnum = "DirectoryService_20150416.ListSchemaExtensions"
)

type ListSchemaExtensionsHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSchemaExtensionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
