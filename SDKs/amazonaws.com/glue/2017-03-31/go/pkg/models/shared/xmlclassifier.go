package shared

import (
	"time"
)

type XMLClassifier struct {
	Classification string     `json:"Classification"`
	CreationTime   *time.Time `json:"CreationTime"`
	LastUpdated    *time.Time `json:"LastUpdated"`
	Name           string     `json:"Name"`
	RowTag         *string    `json:"RowTag"`
	Version        *int64     `json:"Version"`
}
