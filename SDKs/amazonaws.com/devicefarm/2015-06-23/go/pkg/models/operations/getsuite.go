package operations

import (
	"openapi/pkg/models/shared"
)

type GetSuiteXAmzTargetEnum string

const (
	GetSuiteXAmzTargetEnumDeviceFarm20150623GetSuite GetSuiteXAmzTargetEnum = "DeviceFarm_20150623.GetSuite"
)

type GetSuiteHeaders struct {
	XAmzAlgorithm     *string                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSuiteXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSuiteRequest struct {
	Headers GetSuiteHeaders
	Request shared.GetSuiteRequest `request:"mediaType=application/json"`
}

type GetSuiteResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	GetSuiteResult          *shared.GetSuiteResult
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
