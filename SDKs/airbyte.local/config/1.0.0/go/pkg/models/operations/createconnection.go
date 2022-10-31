package operations

import (
	"openapi/pkg/models/shared"
)

type CreateConnectionRequest struct {
	Request shared.ConnectionCreate `request:"mediaType=application/json"`
}

type CreateConnectionResponse struct {
	ConnectionRead            *shared.ConnectionRead
	ContentType               string
	InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo
	StatusCode                int64
}
