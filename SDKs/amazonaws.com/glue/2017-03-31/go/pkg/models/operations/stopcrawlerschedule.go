package operations

import (
	"openapi/pkg/models/shared"
)

type StopCrawlerScheduleXAmzTargetEnum string

const (
	StopCrawlerScheduleXAmzTargetEnumAwsGlueStopCrawlerSchedule StopCrawlerScheduleXAmzTargetEnum = "AWSGlue.StopCrawlerSchedule"
)

type StopCrawlerScheduleHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopCrawlerScheduleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopCrawlerScheduleRequest struct {
	Headers StopCrawlerScheduleHeaders
	Request shared.StopCrawlerScheduleRequest `request:"mediaType=application/json"`
}

type StopCrawlerScheduleResponse struct {
	ContentType                     string
	EntityNotFoundException         *interface{}
	OperationTimeoutException       *interface{}
	SchedulerNotRunningException    *interface{}
	SchedulerTransitioningException *interface{}
	StatusCode                      int64
	StopCrawlerScheduleResponse     map[string]interface{}
}
