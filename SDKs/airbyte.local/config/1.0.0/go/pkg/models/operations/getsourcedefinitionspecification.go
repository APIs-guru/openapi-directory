package operations

import (
	"openapi/pkg/models/shared"
)

type GetSourceDefinitionSpecificationRequest struct {
	Request shared.SourceDefinitionIDRequestBody `request:"mediaType=application/json"`
}

type GetSourceDefinitionSpecificationResponse struct {
	ContentType                       string
	InvalidInputExceptionInfo         *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo        *shared.NotFoundKnownExceptionInfo
	SourceDefinitionSpecificationRead *shared.SourceDefinitionSpecificationRead
	StatusCode                        int64
}
