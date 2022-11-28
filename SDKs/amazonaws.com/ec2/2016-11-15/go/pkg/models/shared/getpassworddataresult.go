package shared

import (
	"time"
)

type GetPasswordDataResult struct {
	InstanceID   *string
	PasswordData *string
	Timestamp    *time.Time
}
