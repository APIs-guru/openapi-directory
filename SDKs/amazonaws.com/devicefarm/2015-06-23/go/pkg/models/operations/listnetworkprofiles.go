package operations

import (
	"openapi/pkg/models/shared"
)

type ListNetworkProfilesXAmzTargetEnum string

const (
	ListNetworkProfilesXAmzTargetEnumDeviceFarm20150623ListNetworkProfiles ListNetworkProfilesXAmzTargetEnum = "DeviceFarm_20150623.ListNetworkProfiles"
)

type ListNetworkProfilesHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListNetworkProfilesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListNetworkProfilesRequest struct {
	Headers ListNetworkProfilesHeaders
	Request shared.ListNetworkProfilesRequest `request:"mediaType=application/json"`
}

type ListNetworkProfilesResponse struct {
	ArgumentException         *interface{}
	ContentType               string
	LimitExceededException    *interface{}
	ListNetworkProfilesResult *shared.ListNetworkProfilesResult
	NotFoundException         *interface{}
	ServiceAccountException   *interface{}
	StatusCode                int64
}
