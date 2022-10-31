package operations

import (
	"openapi/pkg/models/shared"
)

type GetSourceDefinitionRequest struct {
	Request shared.SourceDefinitionIDRequestBody `request:"mediaType=application/json"`
}

type GetSourceDefinitionResponse struct {
	ContentType                string
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	SourceDefinitionRead       *shared.SourceDefinitionRead
	StatusCode                 int64
}
