package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteInstanceProfileXAmzTargetEnum string

const (
	DeleteInstanceProfileXAmzTargetEnumDeviceFarm20150623DeleteInstanceProfile DeleteInstanceProfileXAmzTargetEnum = "DeviceFarm_20150623.DeleteInstanceProfile"
)

type DeleteInstanceProfileHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteInstanceProfileXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteInstanceProfileRequest struct {
	Headers DeleteInstanceProfileHeaders
	Request shared.DeleteInstanceProfileRequest `request:"mediaType=application/json"`
}

type DeleteInstanceProfileResponse struct {
	ArgumentException           *interface{}
	ContentType                 string
	DeleteInstanceProfileResult map[string]interface{}
	LimitExceededException      *interface{}
	NotFoundException           *interface{}
	ServiceAccountException     *interface{}
	StatusCode                  int64
}
