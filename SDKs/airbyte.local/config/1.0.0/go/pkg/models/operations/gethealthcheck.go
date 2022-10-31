package operations

import (
	"openapi/pkg/models/shared"
)

type GetHealthCheckResponse struct {
	ContentType     string
	HealthCheckRead *shared.HealthCheckRead
	StatusCode      int64
}
