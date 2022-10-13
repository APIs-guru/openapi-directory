package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTableReplicaAutoScalingXAmzTargetEnum string

const (
	DescribeTableReplicaAutoScalingXAmzTargetEnumDynamoDb20120810DescribeTableReplicaAutoScaling DescribeTableReplicaAutoScalingXAmzTargetEnum = "DynamoDB_20120810.DescribeTableReplicaAutoScaling"
)

type DescribeTableReplicaAutoScalingHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTableReplicaAutoScalingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTableReplicaAutoScalingRequest struct {
	Headers DescribeTableReplicaAutoScalingHeaders
	Request shared.DescribeTableReplicaAutoScalingInput `request:"mediaType=application/json"`
}

type DescribeTableReplicaAutoScalingResponse struct {
	ContentType                           string
	DescribeTableReplicaAutoScalingOutput *shared.DescribeTableReplicaAutoScalingOutput
	InternalServerError                   *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
}
