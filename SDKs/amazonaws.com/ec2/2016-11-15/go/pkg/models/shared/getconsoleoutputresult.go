package shared

import (
	"time"
)

type GetConsoleOutputResult struct {
	InstanceID *string
	Output     *string
	Timestamp  *time.Time
}
