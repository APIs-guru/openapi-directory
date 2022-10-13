package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateContainerAgentXAmzTargetEnum string

const (
	UpdateContainerAgentXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateContainerAgent UpdateContainerAgentXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.UpdateContainerAgent"
)

type UpdateContainerAgentHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateContainerAgentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateContainerAgentRequest struct {
	Headers UpdateContainerAgentHeaders
	Request shared.UpdateContainerAgentRequest `request:"mediaType=application/json"`
}

type UpdateContainerAgentResponse struct {
	ClientException              *interface{}
	ClusterNotFoundException     *interface{}
	ContentType                  string
	InvalidParameterException    *interface{}
	MissingVersionException      *interface{}
	NoUpdateAvailableException   *interface{}
	ServerException              *interface{}
	StatusCode                   int64
	UpdateContainerAgentResponse *shared.UpdateContainerAgentResponse
	UpdateInProgressException    *interface{}
}
