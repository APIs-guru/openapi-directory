package operations

import (
	"openapi/pkg/models/shared"
)

type InvalidateProjectCacheXAmzTargetEnum string

const (
	InvalidateProjectCacheXAmzTargetEnumCodeBuild20161006InvalidateProjectCache InvalidateProjectCacheXAmzTargetEnum = "CodeBuild_20161006.InvalidateProjectCache"
)

type InvalidateProjectCacheHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        InvalidateProjectCacheXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
