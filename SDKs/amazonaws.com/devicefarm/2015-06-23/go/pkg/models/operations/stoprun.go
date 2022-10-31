package operations

import (
	"openapi/pkg/models/shared"
)

type StopRunXAmzTargetEnum string

const (
	StopRunXAmzTargetEnumDeviceFarm20150623StopRun StopRunXAmzTargetEnum = "DeviceFarm_20150623.StopRun"
)

type StopRunHeaders struct {
	XAmzAlgorithm     *string               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopRunXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopRunRequest struct {
	Headers StopRunHeaders
	Request shared.StopRunRequest `request:"mediaType=application/json"`
}

type StopRunResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
	StopRunResult           *shared.StopRunResult
}
