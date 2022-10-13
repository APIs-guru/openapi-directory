package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLocationEfsXAmzTargetEnum string

const (
	CreateLocationEfsXAmzTargetEnumFmrsServiceCreateLocationEfs CreateLocationEfsXAmzTargetEnum = "FmrsService.CreateLocationEfs"
)

type CreateLocationEfsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLocationEfsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateLocationEfsRequest struct {
	Headers CreateLocationEfsHeaders
	Request shared.CreateLocationEfsRequest `request:"mediaType=application/json"`
}

type CreateLocationEfsResponse struct {
	ContentType               string
	CreateLocationEfsResponse *shared.CreateLocationEfsResponse
	InternalException         *interface{}
	InvalidRequestException   *interface{}
	StatusCode                int64
}
