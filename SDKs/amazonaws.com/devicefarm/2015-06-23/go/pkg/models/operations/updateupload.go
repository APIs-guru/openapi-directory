package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUploadXAmzTargetEnum string

const (
	UpdateUploadXAmzTargetEnumDeviceFarm20150623UpdateUpload UpdateUploadXAmzTargetEnum = "DeviceFarm_20150623.UpdateUpload"
)

type UpdateUploadHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateUploadXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateUploadRequest struct {
	Headers UpdateUploadHeaders
	Request shared.UpdateUploadRequest `request:"mediaType=application/json"`
}

type UpdateUploadResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
	UpdateUploadResult      *shared.UpdateUploadResult
}
