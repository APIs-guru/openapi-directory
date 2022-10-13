package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLocationNfsXAmzTargetEnum string

const (
	CreateLocationNfsXAmzTargetEnumFmrsServiceCreateLocationNfs CreateLocationNfsXAmzTargetEnum = "FmrsService.CreateLocationNfs"
)

type CreateLocationNfsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLocationNfsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateLocationNfsRequest struct {
	Headers CreateLocationNfsHeaders
	Request shared.CreateLocationNfsRequest `request:"mediaType=application/json"`
}

type CreateLocationNfsResponse struct {
	ContentType               string
	CreateLocationNfsResponse *shared.CreateLocationNfsResponse
	InternalException         *interface{}
	InvalidRequestException   *interface{}
	StatusCode                int64
}
