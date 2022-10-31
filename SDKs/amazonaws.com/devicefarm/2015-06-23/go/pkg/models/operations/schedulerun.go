package operations

import (
	"openapi/pkg/models/shared"
)

type ScheduleRunXAmzTargetEnum string

const (
	ScheduleRunXAmzTargetEnumDeviceFarm20150623ScheduleRun ScheduleRunXAmzTargetEnum = "DeviceFarm_20150623.ScheduleRun"
)

type ScheduleRunHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ScheduleRunXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
