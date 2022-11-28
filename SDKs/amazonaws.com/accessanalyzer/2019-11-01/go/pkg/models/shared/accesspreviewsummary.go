package shared

import (
	"time"
)

// AccessPreviewSummary
// Contains a summary of information about an access preview.
type AccessPreviewSummary struct {
	AnalyzerArn  string                     `json:"analyzerArn"`
	CreatedAt    time.Time                  `json:"createdAt"`
	ID           string                     `json:"id"`
	Status       AccessPreviewStatusEnum    `json:"status"`
	StatusReason *AccessPreviewStatusReason `json:"statusReason,omitempty"`
}
