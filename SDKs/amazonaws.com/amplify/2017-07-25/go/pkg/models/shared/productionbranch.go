package shared

import (
	"time"
)

// ProductionBranch
//
//	Describes the information about a production branch for an Amplify app.
type ProductionBranch struct {
	BranchName     *string    `json:"branchName,omitempty"`
	LastDeployTime *time.Time `json:"lastDeployTime,omitempty"`
	Status         *string    `json:"status,omitempty"`
	ThumbnailURL   *string    `json:"thumbnailUrl,omitempty"`
}
