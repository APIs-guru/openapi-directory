package shared

import (
	"time"
)

type JSONClassifier struct {
	CreationTime *time.Time `json:"CreationTime"`
	JSONPath     string     `json:"JsonPath"`
	LastUpdated  *time.Time `json:"LastUpdated"`
	Name         string     `json:"Name"`
	Version      *int64     `json:"Version"`
}
