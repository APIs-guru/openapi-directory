package shared

import (
	"time"
)

// PlacementSummary
// An object providing summary information for a particular placement.
type PlacementSummary struct {
	CreatedDate   time.Time `json:"createdDate"`
	PlacementName string    `json:"placementName"`
	ProjectName   string    `json:"projectName"`
	UpdatedDate   time.Time `json:"updatedDate"`
}
