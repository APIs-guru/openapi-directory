package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTableReplicaAutoScalingXAmzTargetEnum string

const (
	UpdateTableReplicaAutoScalingXAmzTargetEnumDynamoDb20120810UpdateTableReplicaAutoScaling UpdateTableReplicaAutoScalingXAmzTargetEnum = "DynamoDB_20120810.UpdateTableReplicaAutoScaling"
)

type UpdateTableReplicaAutoScalingHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTableReplicaAutoScalingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateTableReplicaAutoScalingRequest struct {
	Headers UpdateTableReplicaAutoScalingHeaders
	Request shared.UpdateTableReplicaAutoScalingInput `request:"mediaType=application/json"`
}

type UpdateTableReplicaAutoScalingResponse struct {
	ContentType                         string
	InternalServerError                 *interface{}
	LimitExceededException              *interface{}
	ResourceInUseException              *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
	UpdateTableReplicaAutoScalingOutput *shared.UpdateTableReplicaAutoScalingOutput
}
