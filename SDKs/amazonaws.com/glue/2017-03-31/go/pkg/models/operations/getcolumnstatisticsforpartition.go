package operations

import (
	"openapi/pkg/models/shared"
)

type GetColumnStatisticsForPartitionXAmzTargetEnum string

const (
	GetColumnStatisticsForPartitionXAmzTargetEnumAwsGlueGetColumnStatisticsForPartition GetColumnStatisticsForPartitionXAmzTargetEnum = "AWSGlue.GetColumnStatisticsForPartition"
)

type GetColumnStatisticsForPartitionHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetColumnStatisticsForPartitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetColumnStatisticsForPartitionRequest struct {
	Headers GetColumnStatisticsForPartitionHeaders
	Request shared.GetColumnStatisticsForPartitionRequest `request:"mediaType=application/json"`
}

type GetColumnStatisticsForPartitionResponse struct {
	ContentType                             string
	EntityNotFoundException                 *interface{}
	GetColumnStatisticsForPartitionResponse *shared.GetColumnStatisticsForPartitionResponse
	GlueEncryptionException                 *interface{}
	InternalServiceException                *interface{}
	InvalidInputException                   *interface{}
	OperationTimeoutException               *interface{}
	StatusCode                              int64
}
