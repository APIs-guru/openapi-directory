package operations

import (
	"openapi/pkg/models/shared"
)

type GetUploadXAmzTargetEnum string

const (
	GetUploadXAmzTargetEnumDeviceFarm20150623GetUpload GetUploadXAmzTargetEnum = "DeviceFarm_20150623.GetUpload"
)

type GetUploadHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetUploadXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetUploadRequest struct {
	Headers GetUploadHeaders
	Request shared.GetUploadRequest `request:"mediaType=application/json"`
}

type GetUploadResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	GetUploadResult         *shared.GetUploadResult
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
