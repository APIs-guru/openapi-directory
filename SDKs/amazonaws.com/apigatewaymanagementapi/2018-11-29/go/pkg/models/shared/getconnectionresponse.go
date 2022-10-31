package shared

import (
	"time"
)

type GetConnectionResponse struct {
	ConnectedAt  *time.Time `json:"ConnectedAt,omitempty"`
	Identity     *Identity  `json:"Identity,omitempty"`
	LastActiveAt *time.Time `json:"LastActiveAt,omitempty"`
}
