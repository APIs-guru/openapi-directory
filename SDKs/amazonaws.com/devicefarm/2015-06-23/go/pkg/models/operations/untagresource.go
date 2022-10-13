package operations

import (
	"openapi/pkg/models/shared"
)

type UntagResourceXAmzTargetEnum string

const (
	UntagResourceXAmzTargetEnumDeviceFarm20150623UntagResource UntagResourceXAmzTargetEnum = "DeviceFarm_20150623.UntagResource"
)

type UntagResourceHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UntagResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UntagResourceRequest struct {
	Headers UntagResourceHeaders
	Request shared.UntagResourceRequest `request:"mediaType=application/json"`
}

type UntagResourceResponse struct {
	ArgumentException     *interface{}
	ContentType           string
	NotFoundException     *interface{}
	StatusCode            int64
	TagOperationException *interface{}
	UntagResourceResponse map[string]interface{}
}
