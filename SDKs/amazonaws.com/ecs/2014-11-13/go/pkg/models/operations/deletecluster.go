package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteClusterXAmzTargetEnum string

const (
	DeleteClusterXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeleteCluster DeleteClusterXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DeleteCluster"
)

type DeleteClusterHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteClusterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
