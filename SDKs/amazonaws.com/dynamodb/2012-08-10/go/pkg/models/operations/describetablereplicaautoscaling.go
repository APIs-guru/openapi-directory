package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTableReplicaAutoScalingXAmzTargetEnum string

const (
	DescribeTableReplicaAutoScalingXAmzTargetEnumDynamoDb20120810DescribeTableReplicaAutoScaling DescribeTableReplicaAutoScalingXAmzTargetEnum = "DynamoDB_20120810.DescribeTableReplicaAutoScaling"
)

type DescribeTableReplicaAutoScalingHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTableReplicaAutoScalingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
