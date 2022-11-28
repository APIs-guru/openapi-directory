package shared

import (
	"time"
)

// BuildSummary
// Contains summary information about a batch build group.
type BuildSummary struct {
	Arn                *string            `json:"arn,omitempty"`
	BuildStatus        *StatusTypeEnum    `json:"buildStatus,omitempty"`
	PrimaryArtifact    *ResolvedArtifact  `json:"primaryArtifact,omitempty"`
	RequestedOn        *time.Time         `json:"requestedOn,omitempty"`
	SecondaryArtifacts []ResolvedArtifact `json:"secondaryArtifacts,omitempty"`
}
