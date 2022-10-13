package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRunXAmzTargetEnum string

const (
	DeleteRunXAmzTargetEnumDeviceFarm20150623DeleteRun DeleteRunXAmzTargetEnum = "DeviceFarm_20150623.DeleteRun"
)

type DeleteRunHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRunXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteRunRequest struct {
	Headers DeleteRunHeaders
	Request shared.DeleteRunRequest `request:"mediaType=application/json"`
}

type DeleteRunResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	DeleteRunResult         map[string]interface{}
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
