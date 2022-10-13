package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeServicesXAmzTargetEnum string

const (
	DescribeServicesXAmzTargetEnumAmazonEc2ContainerServiceV20141113DescribeServices DescribeServicesXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DescribeServices"
)

type DescribeServicesHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeServicesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeServicesRequest struct {
	Headers DescribeServicesHeaders
	Request shared.DescribeServicesRequest `request:"mediaType=application/json"`
}

type DescribeServicesResponse struct {
	ClientException           *interface{}
	ClusterNotFoundException  *interface{}
	ContentType               string
	DescribeServicesResponse  *shared.DescribeServicesResponse
	InvalidParameterException *interface{}
	ServerException           *interface{}
	StatusCode                int64
}
