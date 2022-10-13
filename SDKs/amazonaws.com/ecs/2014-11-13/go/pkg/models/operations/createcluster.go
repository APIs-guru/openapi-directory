package operations

import (
	"openapi/pkg/models/shared"
)

type CreateClusterXAmzTargetEnum string

const (
	CreateClusterXAmzTargetEnumAmazonEc2ContainerServiceV20141113CreateCluster CreateClusterXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.CreateCluster"
)

type CreateClusterHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateClusterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateClusterRequest struct {
	Headers CreateClusterHeaders
	Request shared.CreateClusterRequest `request:"mediaType=application/json"`
}

type CreateClusterResponse struct {
	ClientException           *interface{}
	ContentType               string
	CreateClusterResponse     *shared.CreateClusterResponse
	InvalidParameterException *interface{}
	ServerException           *interface{}
	StatusCode                int64
}
