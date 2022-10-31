package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTaskSetsXAmzTargetEnum string

const (
	DescribeTaskSetsXAmzTargetEnumAmazonEc2ContainerServiceV20141113DescribeTaskSets DescribeTaskSetsXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DescribeTaskSets"
)

type DescribeTaskSetsHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTaskSetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeTaskSetsRequest struct {
	Headers DescribeTaskSetsHeaders
	Request shared.DescribeTaskSetsRequest `request:"mediaType=application/json"`
}

type DescribeTaskSetsResponse struct {
	AccessDeniedException       *interface{}
	ClientException             *interface{}
	ClusterNotFoundException    *interface{}
	ContentType                 string
	DescribeTaskSetsResponse    *shared.DescribeTaskSetsResponse
	InvalidParameterException   *interface{}
	ServerException             *interface{}
	ServiceNotActiveException   *interface{}
	ServiceNotFoundException    *interface{}
	StatusCode                  int64
	UnsupportedFeatureException *interface{}
}
