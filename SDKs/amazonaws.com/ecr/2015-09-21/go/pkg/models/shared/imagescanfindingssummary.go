package shared

import (
	"time"
)

type ImageScanFindingsSummary struct {
	FindingSeverityCounts        map[string]int64 `json:"findingSeverityCounts"`
	ImageScanCompletedAt         *time.Time       `json:"imageScanCompletedAt"`
	VulnerabilitySourceUpdatedAt *time.Time       `json:"vulnerabilitySourceUpdatedAt"`
}
