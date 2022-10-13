package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSourceDefinitionRequest struct {
	Request *shared.SourceDefinitionUpdate `request:"mediaType=application/json"`
}

type UpdateSourceDefinitionResponse struct {
	ContentType                string
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	SourceDefinitionRead       *shared.SourceDefinitionRead
	StatusCode                 int64
}
