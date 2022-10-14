package shared

import (
	"time"
)

type DocumentationVersion struct {
	CreatedDate *time.Time `json:"createdDate,omitempty"`
	Description *string    `json:"description,omitempty"`
	Version     *string    `json:"version,omitempty"`
}
