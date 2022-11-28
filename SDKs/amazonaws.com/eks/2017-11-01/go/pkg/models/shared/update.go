package shared

import (
	"time"
)

// Update
// An object representing an asynchronous update.
type Update struct {
	CreatedAt *time.Time        `json:"createdAt,omitempty"`
	Errors    []ErrorDetail     `json:"errors,omitempty"`
	ID        *string           `json:"id,omitempty"`
	Params    []UpdateParam     `json:"params,omitempty"`
	Status    *UpdateStatusEnum `json:"status,omitempty"`
	Type      *UpdateTypeEnum   `json:"type,omitempty"`
}
