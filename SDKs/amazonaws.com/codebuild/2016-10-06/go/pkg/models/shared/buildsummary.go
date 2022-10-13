package shared

import (
	"time"
)

type BuildSummary struct {
	Arn                *string            `json:"arn"`
	BuildStatus        *StatusTypeEnum    `json:"buildStatus"`
	PrimaryArtifact    *ResolvedArtifact  `json:"primaryArtifact"`
	RequestedOn        *time.Time         `json:"requestedOn"`
	SecondaryArtifacts []ResolvedArtifact `json:"secondaryArtifacts"`
}
