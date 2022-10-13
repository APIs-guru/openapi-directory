package shared

import (
	"time"
)

type GrokClassifier struct {
	Classification string     `json:"Classification"`
	CreationTime   *time.Time `json:"CreationTime"`
	CustomPatterns *string    `json:"CustomPatterns"`
	GrokPattern    string     `json:"GrokPattern"`
	LastUpdated    *time.Time `json:"LastUpdated"`
	Name           string     `json:"Name"`
	Version        *int64     `json:"Version"`
}
