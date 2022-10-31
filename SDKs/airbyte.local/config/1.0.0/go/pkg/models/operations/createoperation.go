package operations

import (
	"openapi/pkg/models/shared"
)

type CreateOperationRequest struct {
	Request shared.OperationCreate `request:"mediaType=application/json"`
}

type CreateOperationResponse struct {
	ContentType               string
	InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo
	OperationRead             *shared.OperationRead
	StatusCode                int64
}
