package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateColumnStatisticsForPartitionXAmzTargetEnum string

const (
	UpdateColumnStatisticsForPartitionXAmzTargetEnumAwsGlueUpdateColumnStatisticsForPartition UpdateColumnStatisticsForPartitionXAmzTargetEnum = "AWSGlue.UpdateColumnStatisticsForPartition"
)

type UpdateColumnStatisticsForPartitionHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateColumnStatisticsForPartitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateColumnStatisticsForPartitionRequest struct {
	Headers UpdateColumnStatisticsForPartitionHeaders
	Request shared.UpdateColumnStatisticsForPartitionRequest `request:"mediaType=application/json"`
}

type UpdateColumnStatisticsForPartitionResponse struct {
	ContentType                                string
	EntityNotFoundException                    *interface{}
	GlueEncryptionException                    *interface{}
	InternalServiceException                   *interface{}
	InvalidInputException                      *interface{}
	OperationTimeoutException                  *interface{}
	StatusCode                                 int64
	UpdateColumnStatisticsForPartitionResponse *shared.UpdateColumnStatisticsForPartitionResponse
}
