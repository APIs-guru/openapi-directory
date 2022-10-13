package shared

import (
	"time"
)

type ListProfileObjectTypeItem struct {
	CreatedAt      *time.Time        `json:"CreatedAt"`
	Description    string            `json:"Description"`
	LastUpdatedAt  *time.Time        `json:"LastUpdatedAt"`
	ObjectTypeName string            `json:"ObjectTypeName"`
	Tags           map[string]string `json:"Tags"`
}
