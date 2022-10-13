package operations

import (
	"openapi/pkg/models/shared"
)

type GetRunXAmzTargetEnum string

const (
	GetRunXAmzTargetEnumDeviceFarm20150623GetRun GetRunXAmzTargetEnum = "DeviceFarm_20150623.GetRun"
)

type GetRunHeaders struct {
	XAmzAlgorithm     *string              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string              `header:"name=X-Amz-Credential"`
	XAmzDate          *string              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRunXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRunRequest struct {
	Headers GetRunHeaders
	Request shared.GetRunRequest `request:"mediaType=application/json"`
}

type GetRunResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	GetRunResult            *shared.GetRunResult
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
