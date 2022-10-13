package shared

import (
	"time"
)

type AnalyzerSummary struct {
	Arn                    string             `json:"arn"`
	CreatedAt              time.Time          `json:"createdAt"`
	LastResourceAnalyzed   *string            `json:"lastResourceAnalyzed"`
	LastResourceAnalyzedAt *time.Time         `json:"lastResourceAnalyzedAt"`
	Name                   string             `json:"name"`
	Status                 AnalyzerStatusEnum `json:"status"`
	StatusReason           *StatusReason      `json:"statusReason"`
	Tags                   map[string]string  `json:"tags"`
	Type                   TypeEnum           `json:"type"`
}
