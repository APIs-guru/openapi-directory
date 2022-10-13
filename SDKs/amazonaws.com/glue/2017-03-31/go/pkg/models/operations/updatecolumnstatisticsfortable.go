package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateColumnStatisticsForTableXAmzTargetEnum string

const (
	UpdateColumnStatisticsForTableXAmzTargetEnumAwsGlueUpdateColumnStatisticsForTable UpdateColumnStatisticsForTableXAmzTargetEnum = "AWSGlue.UpdateColumnStatisticsForTable"
)

type UpdateColumnStatisticsForTableHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateColumnStatisticsForTableXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateColumnStatisticsForTableRequest struct {
	Headers UpdateColumnStatisticsForTableHeaders
	Request shared.UpdateColumnStatisticsForTableRequest `request:"mediaType=application/json"`
}

type UpdateColumnStatisticsForTableResponse struct {
	ContentType                            string
	EntityNotFoundException                *interface{}
	GlueEncryptionException                *interface{}
	InternalServiceException               *interface{}
	InvalidInputException                  *interface{}
	OperationTimeoutException              *interface{}
	StatusCode                             int64
	UpdateColumnStatisticsForTableResponse *shared.UpdateColumnStatisticsForTableResponse
}
