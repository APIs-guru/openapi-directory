package operations

import (
	"openapi/pkg/models/shared"
)

type EnableRadiusXAmzTargetEnum string

const (
	EnableRadiusXAmzTargetEnumDirectoryService20150416EnableRadius EnableRadiusXAmzTargetEnum = "DirectoryService_20150416.EnableRadius"
)

type EnableRadiusHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableRadiusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type EnableRadiusRequest struct {
	Headers EnableRadiusHeaders
	Request shared.EnableRadiusRequest `request:"mediaType=application/json"`
}

type EnableRadiusResponse struct {
	ClientException              *interface{}
	ContentType                  string
	EnableRadiusResult           map[string]interface{}
	EntityAlreadyExistsException *interface{}
	EntityDoesNotExistException  *interface{}
	InvalidParameterException    *interface{}
	ServiceException             *interface{}
	StatusCode                   int64
}
