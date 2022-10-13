package shared

import (
	"time"
)

type FileSystemSize struct {
	Timestamp       *time.Time `json:"Timestamp"`
	Value           int64      `json:"Value"`
	ValueInIa       *int64     `json:"ValueInIA"`
	ValueInStandard *int64     `json:"ValueInStandard"`
}
