package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterEventTopicXAmzTargetEnum string

const (
	RegisterEventTopicXAmzTargetEnumDirectoryService20150416RegisterEventTopic RegisterEventTopicXAmzTargetEnum = "DirectoryService_20150416.RegisterEventTopic"
)

type RegisterEventTopicHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterEventTopicXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RegisterEventTopicRequest struct {
	Headers RegisterEventTopicHeaders
	Request shared.RegisterEventTopicRequest `request:"mediaType=application/json"`
}

type RegisterEventTopicResponse struct {
	ClientException             *interface{}
	ContentType                 string
	EntityDoesNotExistException *interface{}
	InvalidParameterException   *interface{}
	RegisterEventTopicResult    map[string]interface{}
	ServiceException            *interface{}
	StatusCode                  int64
}
