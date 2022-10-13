package operations

import (
	"openapi/pkg/models/shared"
)

type DiscoverPollEndpointXAmzTargetEnum string

const (
	DiscoverPollEndpointXAmzTargetEnumAmazonEc2ContainerServiceV20141113DiscoverPollEndpoint DiscoverPollEndpointXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint"
)

type DiscoverPollEndpointHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DiscoverPollEndpointXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DiscoverPollEndpointRequest struct {
	Headers DiscoverPollEndpointHeaders
	Request shared.DiscoverPollEndpointRequest `request:"mediaType=application/json"`
}

type DiscoverPollEndpointResponse struct {
	ClientException              *interface{}
	ContentType                  string
	DiscoverPollEndpointResponse *shared.DiscoverPollEndpointResponse
	ServerException              *interface{}
	StatusCode                   int64
}
