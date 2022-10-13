package shared

import (
	"time"
)

type ImageScanFindings struct {
	FindingSeverityCounts        map[string]int64   `json:"findingSeverityCounts"`
	Findings                     []ImageScanFinding `json:"findings"`
	ImageScanCompletedAt         *time.Time         `json:"imageScanCompletedAt"`
	VulnerabilitySourceUpdatedAt *time.Time         `json:"vulnerabilitySourceUpdatedAt"`
}
