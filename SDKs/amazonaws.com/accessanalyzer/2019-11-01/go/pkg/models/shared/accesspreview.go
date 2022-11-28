package shared

import (
	"time"
)

// AccessPreview
// Contains information about an access preview.
type AccessPreview struct {
	AnalyzerArn    string                     `json:"analyzerArn"`
	Configurations map[string]Configuration   `json:"configurations"`
	CreatedAt      time.Time                  `json:"createdAt"`
	ID             string                     `json:"id"`
	Status         AccessPreviewStatusEnum    `json:"status"`
	StatusReason   *AccessPreviewStatusReason `json:"statusReason,omitempty"`
}
