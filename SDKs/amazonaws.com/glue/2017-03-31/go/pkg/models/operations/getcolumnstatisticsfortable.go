package operations

import (
	"openapi/pkg/models/shared"
)

type GetColumnStatisticsForTableXAmzTargetEnum string

const (
	GetColumnStatisticsForTableXAmzTargetEnumAwsGlueGetColumnStatisticsForTable GetColumnStatisticsForTableXAmzTargetEnum = "AWSGlue.GetColumnStatisticsForTable"
)

type GetColumnStatisticsForTableHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetColumnStatisticsForTableXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetColumnStatisticsForTableRequest struct {
	Headers GetColumnStatisticsForTableHeaders
	Request shared.GetColumnStatisticsForTableRequest `request:"mediaType=application/json"`
}

type GetColumnStatisticsForTableResponse struct {
	ContentType                         string
	EntityNotFoundException             *interface{}
	GetColumnStatisticsForTableResponse *shared.GetColumnStatisticsForTableResponse
	GlueEncryptionException             *interface{}
	InternalServiceException            *interface{}
	InvalidInputException               *interface{}
	OperationTimeoutException           *interface{}
	StatusCode                          int64
}
