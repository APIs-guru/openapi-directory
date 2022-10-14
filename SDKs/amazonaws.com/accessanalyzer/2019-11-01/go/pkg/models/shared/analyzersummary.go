package shared

import (
	"time"
)

type AnalyzerSummary struct {
	Arn                    string             `json:"arn"`
	CreatedAt              time.Time          `json:"createdAt"`
	LastResourceAnalyzed   *string            `json:"lastResourceAnalyzed,omitempty"`
	LastResourceAnalyzedAt *time.Time         `json:"lastResourceAnalyzedAt,omitempty"`
	Name                   string             `json:"name"`
	Status                 AnalyzerStatusEnum `json:"status"`
	StatusReason           *StatusReason      `json:"statusReason,omitempty"`
	Tags                   map[string]string  `json:"tags,omitempty"`
	Type                   TypeEnum           `json:"type"`
}
