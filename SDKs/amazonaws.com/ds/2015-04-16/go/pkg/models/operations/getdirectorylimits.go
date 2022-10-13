package operations

import (
	"openapi/pkg/models/shared"
)

type GetDirectoryLimitsXAmzTargetEnum string

const (
	GetDirectoryLimitsXAmzTargetEnumDirectoryService20150416GetDirectoryLimits GetDirectoryLimitsXAmzTargetEnum = "DirectoryService_20150416.GetDirectoryLimits"
)

type GetDirectoryLimitsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDirectoryLimitsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDirectoryLimitsRequest struct {
	Headers GetDirectoryLimitsHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetDirectoryLimitsResponse struct {
	ClientException             *interface{}
	ContentType                 string
	EntityDoesNotExistException *interface{}
	GetDirectoryLimitsResult    *shared.GetDirectoryLimitsResult
	ServiceException            *interface{}
	StatusCode                  int64
}
