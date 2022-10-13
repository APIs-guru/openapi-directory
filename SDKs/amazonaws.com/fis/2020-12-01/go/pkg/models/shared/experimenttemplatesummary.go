package shared

import (
	"time"
)

type ExperimentTemplateSummary struct {
	CreationTime   *time.Time        `json:"creationTime"`
	Description    *string           `json:"description"`
	ID             *string           `json:"id"`
	LastUpdateTime *time.Time        `json:"lastUpdateTime"`
	Tags           map[string]string `json:"tags"`
}
