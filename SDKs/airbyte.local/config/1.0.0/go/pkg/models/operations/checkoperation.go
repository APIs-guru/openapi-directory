package operations

import (
	"openapi/pkg/models/shared"
)

type CheckOperationRequest struct {
	Request shared.OperatorConfiguration `request:"mediaType=application/json"`
}

type CheckOperationResponse struct {
	CheckOperationRead        *shared.CheckOperationRead
	ContentType               string
	InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo
	StatusCode                int64
}
