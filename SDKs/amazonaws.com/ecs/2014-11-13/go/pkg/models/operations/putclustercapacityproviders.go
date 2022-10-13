package operations

import (
	"openapi/pkg/models/shared"
)

type PutClusterCapacityProvidersXAmzTargetEnum string

const (
	PutClusterCapacityProvidersXAmzTargetEnumAmazonEc2ContainerServiceV20141113PutClusterCapacityProviders PutClusterCapacityProvidersXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders"
)

type PutClusterCapacityProvidersHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutClusterCapacityProvidersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutClusterCapacityProvidersRequest struct {
	Headers PutClusterCapacityProvidersHeaders
	Request shared.PutClusterCapacityProvidersRequest `request:"mediaType=application/json"`
}

type PutClusterCapacityProvidersResponse struct {
	ClientException                     *interface{}
	ClusterNotFoundException            *interface{}
	ContentType                         string
	InvalidParameterException           *interface{}
	PutClusterCapacityProvidersResponse *shared.PutClusterCapacityProvidersResponse
	ResourceInUseException              *interface{}
	ServerException                     *interface{}
	StatusCode                          int64
	UpdateInProgressException           *interface{}
}
