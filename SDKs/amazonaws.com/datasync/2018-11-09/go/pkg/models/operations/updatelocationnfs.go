package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLocationNfsXAmzTargetEnum string

const (
	UpdateLocationNfsXAmzTargetEnumFmrsServiceUpdateLocationNfs UpdateLocationNfsXAmzTargetEnum = "FmrsService.UpdateLocationNfs"
)

type UpdateLocationNfsHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateLocationNfsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
