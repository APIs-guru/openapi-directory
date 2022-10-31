package operations

import (
	"openapi/pkg/models/shared"
)

type ImportArchiveRequest struct {
	Request []byte `request:"mediaType=application/x-gzip"`
}

type ImportArchiveResponse struct {
	ContentType string
	ImportRead  *shared.ImportRead
	StatusCode  int64
}
