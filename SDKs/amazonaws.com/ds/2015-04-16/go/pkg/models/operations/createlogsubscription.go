package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLogSubscriptionXAmzTargetEnum string

const (
	CreateLogSubscriptionXAmzTargetEnumDirectoryService20150416CreateLogSubscription CreateLogSubscriptionXAmzTargetEnum = "DirectoryService_20150416.CreateLogSubscription"
)

type CreateLogSubscriptionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLogSubscriptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateLogSubscriptionRequest struct {
	Headers CreateLogSubscriptionHeaders
	Request shared.CreateLogSubscriptionRequest `request:"mediaType=application/json"`
}

type CreateLogSubscriptionResponse struct {
	ClientException                  *interface{}
	ContentType                      string
	CreateLogSubscriptionResult      map[string]interface{}
	EntityAlreadyExistsException     *interface{}
	EntityDoesNotExistException      *interface{}
	InsufficientPermissionsException *interface{}
	ServiceException                 *interface{}
	StatusCode                       int64
	UnsupportedOperationException    *interface{}
}
