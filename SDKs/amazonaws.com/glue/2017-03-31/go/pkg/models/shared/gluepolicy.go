package shared

import (
	"time"
)

type GluePolicy struct {
	CreateTime   *time.Time `json:"CreateTime"`
	PolicyHash   *string    `json:"PolicyHash"`
	PolicyInJSON *string    `json:"PolicyInJson"`
	UpdateTime   *time.Time `json:"UpdateTime"`
}
