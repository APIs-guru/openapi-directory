package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCapacityProvidersXAmzTargetEnum string

const (
	DescribeCapacityProvidersXAmzTargetEnumAmazonEc2ContainerServiceV20141113DescribeCapacityProviders DescribeCapacityProvidersXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders"
)

type DescribeCapacityProvidersHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCapacityProvidersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeCapacityProvidersRequest struct {
	Headers DescribeCapacityProvidersHeaders
	Request shared.DescribeCapacityProvidersRequest `request:"mediaType=application/json"`
}

type DescribeCapacityProvidersResponse struct {
	ClientException                   *interface{}
	ContentType                       string
	DescribeCapacityProvidersResponse *shared.DescribeCapacityProvidersResponse
	InvalidParameterException         *interface{}
	ServerException                   *interface{}
	StatusCode                        int64
}
