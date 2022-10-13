package operations

import (
	"openapi/pkg/models/shared"
)

type ScheduleRunXAmzTargetEnum string

const (
	ScheduleRunXAmzTargetEnumDeviceFarm20150623ScheduleRun ScheduleRunXAmzTargetEnum = "DeviceFarm_20150623.ScheduleRun"
)

type ScheduleRunHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ScheduleRunXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ScheduleRunRequest struct {
	Headers ScheduleRunHeaders
	Request shared.ScheduleRunRequest `request:"mediaType=application/json"`
}

type ScheduleRunResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	IdempotencyException    *interface{}
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ScheduleRunResult       *shared.ScheduleRunResult
	ServiceAccountException *interface{}
	StatusCode              int64
}
