package operations

import (
	"openapi/pkg/models/shared"
)

type ListLogSubscriptionsXAmzTargetEnum string

const (
	ListLogSubscriptionsXAmzTargetEnumDirectoryService20150416ListLogSubscriptions ListLogSubscriptionsXAmzTargetEnum = "DirectoryService_20150416.ListLogSubscriptions"
)

type ListLogSubscriptionsHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLogSubscriptionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListLogSubscriptionsRequest struct {
	Headers ListLogSubscriptionsHeaders
	Request shared.ListLogSubscriptionsRequest `request:"mediaType=application/json"`
}

type ListLogSubscriptionsResponse struct {
	ClientException             *interface{}
	ContentType                 string
	EntityDoesNotExistException *interface{}
	InvalidNextTokenException   *interface{}
	ListLogSubscriptionsResult  *shared.ListLogSubscriptionsResult
	ServiceException            *interface{}
	StatusCode                  int64
}
