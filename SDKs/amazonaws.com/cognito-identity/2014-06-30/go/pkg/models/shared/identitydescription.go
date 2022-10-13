package shared

import (
	"time"
)

type IdentityDescription struct {
	CreationDate     *time.Time `json:"CreationDate"`
	IdentityID       *string    `json:"IdentityId"`
	LastModifiedDate *time.Time `json:"LastModifiedDate"`
	Logins           []string   `json:"Logins"`
}
