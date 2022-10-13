package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeContainerInstancesXAmzTargetEnum string

const (
	DescribeContainerInstancesXAmzTargetEnumAmazonEc2ContainerServiceV20141113DescribeContainerInstances DescribeContainerInstancesXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DescribeContainerInstances"
)

type DescribeContainerInstancesHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeContainerInstancesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeContainerInstancesRequest struct {
	Headers DescribeContainerInstancesHeaders
	Request shared.DescribeContainerInstancesRequest `request:"mediaType=application/json"`
}

type DescribeContainerInstancesResponse struct {
	ClientException                    *interface{}
	ClusterNotFoundException           *interface{}
	ContentType                        string
	DescribeContainerInstancesResponse *shared.DescribeContainerInstancesResponse
	InvalidParameterException          *interface{}
	ServerException                    *interface{}
	StatusCode                         int64
}
