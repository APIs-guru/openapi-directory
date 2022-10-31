package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDestinationDefinitionRequest struct {
	Request *shared.DestinationDefinitionCreate `request:"mediaType=application/json"`
}

type CreateDestinationDefinitionResponse struct {
	ContentType               string
	DestinationDefinitionRead *shared.DestinationDefinitionRead
	InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo
	StatusCode                int64
}
