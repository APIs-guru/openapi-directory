package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateContainerInstancesStateXAmzTargetEnum string

const (
	UpdateContainerInstancesStateXAmzTargetEnumAmazonEc2ContainerServiceV20141113UpdateContainerInstancesState UpdateContainerInstancesStateXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState"
)

type UpdateContainerInstancesStateHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateContainerInstancesStateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateContainerInstancesStateRequest struct {
	Headers UpdateContainerInstancesStateHeaders
	Request shared.UpdateContainerInstancesStateRequest `request:"mediaType=application/json"`
}

type UpdateContainerInstancesStateResponse struct {
	ClientException                       *interface{}
	ClusterNotFoundException              *interface{}
	ContentType                           string
	InvalidParameterException             *interface{}
	ServerException                       *interface{}
	StatusCode                            int64
	UpdateContainerInstancesStateResponse *shared.UpdateContainerInstancesStateResponse
}
