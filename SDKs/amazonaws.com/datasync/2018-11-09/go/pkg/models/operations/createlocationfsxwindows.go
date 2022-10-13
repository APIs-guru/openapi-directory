package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLocationFsxWindowsXAmzTargetEnum string

const (
	CreateLocationFsxWindowsXAmzTargetEnumFmrsServiceCreateLocationFsxWindows CreateLocationFsxWindowsXAmzTargetEnum = "FmrsService.CreateLocationFsxWindows"
)

type CreateLocationFsxWindowsHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLocationFsxWindowsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateLocationFsxWindowsRequest struct {
	Headers CreateLocationFsxWindowsHeaders
	Request shared.CreateLocationFsxWindowsRequest `request:"mediaType=application/json"`
}

type CreateLocationFsxWindowsResponse struct {
	ContentType                      string
	CreateLocationFsxWindowsResponse *shared.CreateLocationFsxWindowsResponse
	InternalException                *interface{}
	InvalidRequestException          *interface{}
	StatusCode                       int64
}
