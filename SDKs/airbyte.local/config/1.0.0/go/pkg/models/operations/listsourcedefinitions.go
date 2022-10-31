package operations

import (
	"openapi/pkg/models/shared"
)

type ListSourceDefinitionsResponse struct {
	ContentType              string
	SourceDefinitionReadList *shared.SourceDefinitionReadList
	StatusCode               int64
}
