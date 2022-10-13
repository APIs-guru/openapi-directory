package operations

import (
	"openapi/pkg/models/shared"
)

type StartTaskXAmzTargetEnum string

const (
	StartTaskXAmzTargetEnumAmazonEc2ContainerServiceV20141113StartTask StartTaskXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.StartTask"
)

type StartTaskHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartTaskRequest struct {
	Headers StartTaskHeaders
	Request shared.StartTaskRequest `request:"mediaType=application/json"`
}

type StartTaskResponse struct {
	ClientException           *interface{}
	ClusterNotFoundException  *interface{}
	ContentType               string
	InvalidParameterException *interface{}
	ServerException           *interface{}
	StartTaskResponse         *shared.StartTaskResponse
	StatusCode                int64
}
