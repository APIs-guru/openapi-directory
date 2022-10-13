package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCrawlerScheduleXAmzTargetEnum string

const (
	UpdateCrawlerScheduleXAmzTargetEnumAwsGlueUpdateCrawlerSchedule UpdateCrawlerScheduleXAmzTargetEnum = "AWSGlue.UpdateCrawlerSchedule"
)

type UpdateCrawlerScheduleHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateCrawlerScheduleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateCrawlerScheduleRequest struct {
	Headers UpdateCrawlerScheduleHeaders
	Request shared.UpdateCrawlerScheduleRequest `request:"mediaType=application/json"`
}

type UpdateCrawlerScheduleResponse struct {
	ContentType                     string
	EntityNotFoundException         *interface{}
	InvalidInputException           *interface{}
	OperationTimeoutException       *interface{}
	SchedulerTransitioningException *interface{}
	StatusCode                      int64
	UpdateCrawlerScheduleResponse   map[string]interface{}
	VersionMismatchException        *interface{}
}
