package operations

import (
	"openapi/pkg/models/shared"
)

type ResetUserPasswordXAmzTargetEnum string

const (
	ResetUserPasswordXAmzTargetEnumDirectoryService20150416ResetUserPassword ResetUserPasswordXAmzTargetEnum = "DirectoryService_20150416.ResetUserPassword"
)

type ResetUserPasswordHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ResetUserPasswordXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ResetUserPasswordRequest struct {
	Headers ResetUserPasswordHeaders
	Request shared.ResetUserPasswordRequest `request:"mediaType=application/json"`
}

type ResetUserPasswordResponse struct {
	ClientException               *interface{}
	ContentType                   string
	DirectoryUnavailableException *interface{}
	EntityDoesNotExistException   *interface{}
	InvalidPasswordException      *interface{}
	ResetUserPasswordResult       map[string]interface{}
	ServiceException              *interface{}
	StatusCode                    int64
	UnsupportedOperationException *interface{}
	UserDoesNotExistException     *interface{}
}
