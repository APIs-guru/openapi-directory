package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateContainerAgentXAmzTargetEnum string

const (
	UpdateContainerAgentXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateContainerAgent UpdateContainerAgentXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.UpdateContainerAgent"
)

type UpdateContainerAgentHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateContainerAgentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
