package shared

import (
	"time"
)

type ImageScanFindings struct {
	FindingSeverityCounts        map[string]int64   `json:"findingSeverityCounts,omitempty"`
	Findings                     []ImageScanFinding `json:"findings,omitempty"`
	ImageScanCompletedAt         *time.Time         `json:"imageScanCompletedAt,omitempty"`
	VulnerabilitySourceUpdatedAt *time.Time         `json:"vulnerabilitySourceUpdatedAt,omitempty"`
}
