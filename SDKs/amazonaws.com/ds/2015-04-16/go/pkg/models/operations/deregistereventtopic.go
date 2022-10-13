package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterEventTopicXAmzTargetEnum string

const (
	DeregisterEventTopicXAmzTargetEnumDirectoryService20150416DeregisterEventTopic DeregisterEventTopicXAmzTargetEnum = "DirectoryService_20150416.DeregisterEventTopic"
)

type DeregisterEventTopicHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterEventTopicXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeregisterEventTopicRequest struct {
	Headers DeregisterEventTopicHeaders
	Request shared.DeregisterEventTopicRequest `request:"mediaType=application/json"`
}

type DeregisterEventTopicResponse struct {
	ClientException             *interface{}
	ContentType                 string
	DeregisterEventTopicResult  map[string]interface{}
	EntityDoesNotExistException *interface{}
	InvalidParameterException   *interface{}
	ServiceException            *interface{}
	StatusCode                  int64
}
