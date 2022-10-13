package operations

import (
	"openapi/pkg/models/shared"
)

type GetJobXAmzTargetEnum string

const (
	GetJobXAmzTargetEnumDeviceFarm20150623GetJob GetJobXAmzTargetEnum = "DeviceFarm_20150623.GetJob"
)

type GetJobHeaders struct {
	XAmzAlgorithm     *string              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string              `header:"name=X-Amz-Credential"`
	XAmzDate          *string              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetJobRequest struct {
	Headers GetJobHeaders
	Request shared.GetJobRequest `request:"mediaType=application/json"`
}

type GetJobResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	GetJobResult            *shared.GetJobResult
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
