package operations

import (
	"openapi/pkg/models/shared"
)

type GetTestXAmzTargetEnum string

const (
	GetTestXAmzTargetEnumDeviceFarm20150623GetTest GetTestXAmzTargetEnum = "DeviceFarm_20150623.GetTest"
)

type GetTestHeaders struct {
	XAmzAlgorithm     *string               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"name=X-Amz-Credential"`
	XAmzDate          *string               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTestXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetTestRequest struct {
	Headers GetTestHeaders
	Request shared.GetTestRequest `request:"mediaType=application/json"`
}

type GetTestResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	GetTestResult           *shared.GetTestResult
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
