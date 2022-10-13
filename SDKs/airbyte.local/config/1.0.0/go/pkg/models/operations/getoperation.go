package operations

import (
	"openapi/pkg/models/shared"
)

type GetOperationRequest struct {
	Request shared.OperationIDRequestBody `request:"mediaType=application/json"`
}

type GetOperationResponse struct {
	ContentType                string
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	OperationRead              *shared.OperationRead
	StatusCode                 int64
}
