package operations

import (
	"openapi/pkg/models/shared"
)

type ExecuteSourceDiscoverSchemaRequest struct {
	Request shared.SourceCoreConfig `request:"mediaType=application/json"`
}

type ExecuteSourceDiscoverSchemaResponse struct {
	ContentType               string
	InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo
	SourceDiscoverSchemaRead  *shared.SourceDiscoverSchemaRead
	StatusCode                int64
}
