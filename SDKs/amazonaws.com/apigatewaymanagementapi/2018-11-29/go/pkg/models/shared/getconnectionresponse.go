package shared

import (
	"time"
)

type GetConnectionResponse struct {
	ConnectedAt  *time.Time `json:"ConnectedAt"`
	Identity     *Identity  `json:"Identity"`
	LastActiveAt *time.Time `json:"LastActiveAt"`
}
