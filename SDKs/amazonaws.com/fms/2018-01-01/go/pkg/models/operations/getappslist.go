package operations

import (
	"openapi/pkg/models/shared"
)

type GetAppsListXAmzTargetEnum string

const (
	GetAppsListXAmzTargetEnumAwsfms20180101GetAppsList GetAppsListXAmzTargetEnum = "AWSFMS_20180101.GetAppsList"
)

type GetAppsListHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAppsListXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAppsListRequest struct {
	Headers GetAppsListHeaders
	Request shared.GetAppsListRequest `request:"mediaType=application/json"`
}

type GetAppsListResponse struct {
	ContentType               string
	GetAppsListResponse       *shared.GetAppsListResponse
	InternalErrorException    *interface{}
	InvalidOperationException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
