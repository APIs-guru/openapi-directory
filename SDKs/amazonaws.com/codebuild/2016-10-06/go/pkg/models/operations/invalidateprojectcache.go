package operations

import (
	"openapi/pkg/models/shared"
)

type InvalidateProjectCacheXAmzTargetEnum string

const (
	InvalidateProjectCacheXAmzTargetEnumCodeBuild20161006InvalidateProjectCache InvalidateProjectCacheXAmzTargetEnum = "CodeBuild_20161006.InvalidateProjectCache"
)

type InvalidateProjectCacheHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        InvalidateProjectCacheXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type InvalidateProjectCacheRequest struct {
	Headers InvalidateProjectCacheHeaders
	Request shared.InvalidateProjectCacheInput `request:"mediaType=application/json"`
}

type InvalidateProjectCacheResponse struct {
	ContentType                  string
	InvalidInputException        *interface{}
	InvalidateProjectCacheOutput map[string]interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
