package shared

import (
	"time"
)

type PlacementSummary struct {
	CreatedDate   time.Time `json:"createdDate"`
	PlacementName string    `json:"placementName"`
	ProjectName   string    `json:"projectName"`
	UpdatedDate   time.Time `json:"updatedDate"`
}
