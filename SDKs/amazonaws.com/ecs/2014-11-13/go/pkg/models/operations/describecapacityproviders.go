package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCapacityProvidersXAmzTargetEnum string

const (
	DescribeCapacityProvidersXAmzTargetEnumAmazonEc2ContainerServiceV20141113DescribeCapacityProviders DescribeCapacityProvidersXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders"
)

type DescribeCapacityProvidersHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCapacityProvidersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
