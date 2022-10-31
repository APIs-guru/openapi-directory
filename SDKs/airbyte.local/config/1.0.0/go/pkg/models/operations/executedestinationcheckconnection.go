package operations

import (
	"openapi/pkg/models/shared"
)

type ExecuteDestinationCheckConnectionRequest struct {
	Request shared.DestinationCoreConfig `request:"mediaType=application/json"`
}

type ExecuteDestinationCheckConnectionResponse struct {
	CheckConnectionRead       *shared.CheckConnectionRead
	ContentType               string
	InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo
	StatusCode                int64
}
