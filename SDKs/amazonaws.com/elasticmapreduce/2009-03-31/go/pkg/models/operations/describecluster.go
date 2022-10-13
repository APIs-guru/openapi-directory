package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeClusterXAmzTargetEnum string

const (
	DescribeClusterXAmzTargetEnumElasticMapReduceDescribeCluster DescribeClusterXAmzTargetEnum = "ElasticMapReduce.DescribeCluster"
)

type DescribeClusterHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeClusterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeClusterRequest struct {
	Headers DescribeClusterHeaders
	Request shared.DescribeClusterInput `request:"mediaType=application/json"`
}

type DescribeClusterResponse struct {
	ContentType             string
	DescribeClusterOutput   *shared.DescribeClusterOutput
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
