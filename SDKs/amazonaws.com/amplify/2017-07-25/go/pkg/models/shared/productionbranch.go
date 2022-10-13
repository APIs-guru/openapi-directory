package shared

import (
	"time"
)

type ProductionBranch struct {
	BranchName     *string    `json:"branchName"`
	LastDeployTime *time.Time `json:"lastDeployTime"`
	Status         *string    `json:"status"`
	ThumbnailURL   *string    `json:"thumbnailUrl"`
}
