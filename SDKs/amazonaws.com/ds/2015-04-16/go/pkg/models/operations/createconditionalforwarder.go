package operations

import (
	"openapi/pkg/models/shared"
)

type CreateConditionalForwarderXAmzTargetEnum string

const (
	CreateConditionalForwarderXAmzTargetEnumDirectoryService20150416CreateConditionalForwarder CreateConditionalForwarderXAmzTargetEnum = "DirectoryService_20150416.CreateConditionalForwarder"
)

type CreateConditionalForwarderHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateConditionalForwarderXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateConditionalForwarderRequest struct {
	Headers CreateConditionalForwarderHeaders
	Request shared.CreateConditionalForwarderRequest `request:"mediaType=application/json"`
}

type CreateConditionalForwarderResponse struct {
	ClientException                  *interface{}
	ContentType                      string
	CreateConditionalForwarderResult map[string]interface{}
	DirectoryUnavailableException    *interface{}
	EntityAlreadyExistsException     *interface{}
	EntityDoesNotExistException      *interface{}
	InvalidParameterException        *interface{}
	ServiceException                 *interface{}
	StatusCode                       int64
	UnsupportedOperationException    *interface{}
}
