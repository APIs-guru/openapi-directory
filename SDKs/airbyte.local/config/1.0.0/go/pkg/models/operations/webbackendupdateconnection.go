package operations

import (
	"openapi/pkg/models/shared"
)

type WebBackendUpdateConnectionRequest struct {
	Request shared.WebBackendConnectionUpdate `request:"mediaType=application/json"`
}

type WebBackendUpdateConnectionResponse struct {
	ContentType               string
	InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo
	StatusCode                int64
	WebBackendConnectionRead  *shared.WebBackendConnectionRead
}
