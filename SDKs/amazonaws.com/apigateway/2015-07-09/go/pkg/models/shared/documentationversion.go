package shared

import (
	"time"
)

type DocumentationVersion struct {
	CreatedDate *time.Time `json:"createdDate"`
	Description *string    `json:"description"`
	Version     *string    `json:"version"`
}
