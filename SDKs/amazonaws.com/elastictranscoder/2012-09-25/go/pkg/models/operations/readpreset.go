package operations

import (
	"openapi/pkg/models/shared"
)

type ReadPresetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type ReadPresetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ReadPresetRequest struct {
	PathParams ReadPresetPathParams
	Headers    ReadPresetHeaders
}

type ReadPresetResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	IncompatibleVersionException *interface{}
	InternalServiceException     *interface{}
	ReadPresetResponse           *shared.ReadPresetResponse
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
