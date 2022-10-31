package operations

import (
	"openapi/pkg/models/shared"
)

type GetNetworkProfileXAmzTargetEnum string

const (
	GetNetworkProfileXAmzTargetEnumDeviceFarm20150623GetNetworkProfile GetNetworkProfileXAmzTargetEnum = "DeviceFarm_20150623.GetNetworkProfile"
)

type GetNetworkProfileHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetNetworkProfileXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetNetworkProfileRequest struct {
	Headers GetNetworkProfileHeaders
	Request shared.GetNetworkProfileRequest `request:"mediaType=application/json"`
}

type GetNetworkProfileResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	GetNetworkProfileResult *shared.GetNetworkProfileResult
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
