package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAppsListXAmzTargetEnum string

const (
	DeleteAppsListXAmzTargetEnumAwsfms20180101DeleteAppsList DeleteAppsListXAmzTargetEnum = "AWSFMS_20180101.DeleteAppsList"
)

type DeleteAppsListHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAppsListXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteAppsListRequest struct {
	Headers DeleteAppsListHeaders
	Request shared.DeleteAppsListRequest `request:"mediaType=application/json"`
}

type DeleteAppsListResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidOperationException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
