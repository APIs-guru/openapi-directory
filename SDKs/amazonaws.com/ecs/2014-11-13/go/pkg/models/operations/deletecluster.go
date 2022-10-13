package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteClusterXAmzTargetEnum string

const (
	DeleteClusterXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeleteCluster DeleteClusterXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DeleteCluster"
)

type DeleteClusterHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteClusterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteClusterRequest struct {
	Headers DeleteClusterHeaders
	Request shared.DeleteClusterRequest `request:"mediaType=application/json"`
}

type DeleteClusterResponse struct {
	ClientException                            *interface{}
	ClusterContainsContainerInstancesException *interface{}
	ClusterContainsServicesException           *interface{}
	ClusterContainsTasksException              *interface{}
	ClusterNotFoundException                   *interface{}
	ContentType                                string
	DeleteClusterResponse                      *shared.DeleteClusterResponse
	InvalidParameterException                  *interface{}
	ServerException                            *interface{}
	StatusCode                                 int64
	UpdateInProgressException                  *interface{}
}
