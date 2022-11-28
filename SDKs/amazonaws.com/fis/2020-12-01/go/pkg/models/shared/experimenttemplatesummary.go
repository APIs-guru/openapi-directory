package shared

import (
	"time"
)

// ExperimentTemplateSummary
// Provides a summary of an experiment template.
type ExperimentTemplateSummary struct {
	CreationTime   *time.Time        `json:"creationTime,omitempty"`
	Description    *string           `json:"description,omitempty"`
	ID             *string           `json:"id,omitempty"`
	LastUpdateTime *time.Time        `json:"lastUpdateTime,omitempty"`
	Tags           map[string]string `json:"tags,omitempty"`
}
