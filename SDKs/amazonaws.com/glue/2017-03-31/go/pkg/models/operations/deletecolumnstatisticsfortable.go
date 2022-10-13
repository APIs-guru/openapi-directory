package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteColumnStatisticsForTableXAmzTargetEnum string

const (
	DeleteColumnStatisticsForTableXAmzTargetEnumAwsGlueDeleteColumnStatisticsForTable DeleteColumnStatisticsForTableXAmzTargetEnum = "AWSGlue.DeleteColumnStatisticsForTable"
)

type DeleteColumnStatisticsForTableHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteColumnStatisticsForTableXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteColumnStatisticsForTableRequest struct {
	Headers DeleteColumnStatisticsForTableHeaders
	Request shared.DeleteColumnStatisticsForTableRequest `request:"mediaType=application/json"`
}

type DeleteColumnStatisticsForTableResponse struct {
	ContentType                            string
	DeleteColumnStatisticsForTableResponse map[string]interface{}
	EntityNotFoundException                *interface{}
	GlueEncryptionException                *interface{}
	InternalServiceException               *interface{}
	InvalidInputException                  *interface{}
	OperationTimeoutException              *interface{}
	StatusCode                             int64
}
