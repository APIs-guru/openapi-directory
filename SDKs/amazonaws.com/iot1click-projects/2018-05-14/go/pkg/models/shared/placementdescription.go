package shared

import (
	"time"
)

// PlacementDescription
// An object describing a project's placement.
type PlacementDescription struct {
	Attributes    map[string]string `json:"attributes"`
	CreatedDate   time.Time         `json:"createdDate"`
	PlacementName string            `json:"placementName"`
	ProjectName   string            `json:"projectName"`
	UpdatedDate   time.Time         `json:"updatedDate"`
}
