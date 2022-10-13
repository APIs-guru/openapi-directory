package shared

import (
	"time"
)

type Update struct {
	CreatedAt *time.Time        `json:"createdAt"`
	Errors    []ErrorDetail     `json:"errors"`
	ID        *string           `json:"id"`
	Params    []UpdateParam     `json:"params"`
	Status    *UpdateStatusEnum `json:"status"`
	Type      *UpdateTypeEnum   `json:"type"`
}
