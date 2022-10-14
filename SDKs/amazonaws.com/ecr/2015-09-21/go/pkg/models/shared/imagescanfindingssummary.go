package shared

import (
	"time"
)

type ImageScanFindingsSummary struct {
	FindingSeverityCounts        map[string]int64 `json:"findingSeverityCounts,omitempty"`
	ImageScanCompletedAt         *time.Time       `json:"imageScanCompletedAt,omitempty"`
	VulnerabilitySourceUpdatedAt *time.Time       `json:"vulnerabilitySourceUpdatedAt,omitempty"`
}
