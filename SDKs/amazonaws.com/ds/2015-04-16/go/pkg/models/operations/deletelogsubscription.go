package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLogSubscriptionXAmzTargetEnum string

const (
	DeleteLogSubscriptionXAmzTargetEnumDirectoryService20150416DeleteLogSubscription DeleteLogSubscriptionXAmzTargetEnum = "DirectoryService_20150416.DeleteLogSubscription"
)

type DeleteLogSubscriptionHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLogSubscriptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
