package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLocationNfsXAmzTargetEnum string

const (
	UpdateLocationNfsXAmzTargetEnumFmrsServiceUpdateLocationNfs UpdateLocationNfsXAmzTargetEnum = "FmrsService.UpdateLocationNfs"
)

type UpdateLocationNfsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateLocationNfsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateLocationNfsRequest struct {
	Headers UpdateLocationNfsHeaders
	Request shared.UpdateLocationNfsRequest `request:"mediaType=application/json"`
}

type UpdateLocationNfsResponse struct {
	ContentType               string
	InternalException         *interface{}
	InvalidRequestException   *interface{}
	StatusCode                int64
	UpdateLocationNfsResponse map[string]interface{}
}
