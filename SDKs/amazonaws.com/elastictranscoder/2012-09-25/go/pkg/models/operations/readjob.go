package operations

import (
	"openapi/pkg/models/shared"
)

type ReadJobPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type ReadJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ReadJobRequest struct {
	PathParams ReadJobPathParams
	Headers    ReadJobHeaders
}

type ReadJobResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	IncompatibleVersionException *interface{}
	InternalServiceException     *interface{}
	ReadJobResponse              *shared.ReadJobResponse
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
