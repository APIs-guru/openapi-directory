package shared

import (
	"time"
)

type AccessPreview struct {
	AnalyzerArn    string                     `json:"analyzerArn"`
	Configurations map[string]Configuration   `json:"configurations"`
	CreatedAt      time.Time                  `json:"createdAt"`
	ID             string                     `json:"id"`
	Status         AccessPreviewStatusEnum    `json:"status"`
	StatusReason   *AccessPreviewStatusReason `json:"statusReason,omitempty"`
}
