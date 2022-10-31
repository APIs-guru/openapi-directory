package shared

import (
	"time"
)

type ListProfileObjectTypeItem struct {
	CreatedAt      *time.Time        `json:"CreatedAt,omitempty"`
	Description    string            `json:"Description"`
	LastUpdatedAt  *time.Time        `json:"LastUpdatedAt,omitempty"`
	ObjectTypeName string            `json:"ObjectTypeName"`
	Tags           map[string]string `json:"Tags,omitempty"`
}
