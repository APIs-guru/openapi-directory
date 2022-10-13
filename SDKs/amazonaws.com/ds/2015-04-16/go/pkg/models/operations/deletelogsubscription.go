package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLogSubscriptionXAmzTargetEnum string

const (
	DeleteLogSubscriptionXAmzTargetEnumDirectoryService20150416DeleteLogSubscription DeleteLogSubscriptionXAmzTargetEnum = "DirectoryService_20150416.DeleteLogSubscription"
)

type DeleteLogSubscriptionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLogSubscriptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteLogSubscriptionRequest struct {
	Headers DeleteLogSubscriptionHeaders
	Request shared.DeleteLogSubscriptionRequest `request:"mediaType=application/json"`
}

type DeleteLogSubscriptionResponse struct {
	ClientException               *interface{}
	ContentType                   string
	DeleteLogSubscriptionResult   map[string]interface{}
	EntityDoesNotExistException   *interface{}
	ServiceException              *interface{}
	StatusCode                    int64
	UnsupportedOperationException *interface{}
}
