package shared

import (
	"time"
)

// ProjectDescription
// An object providing detailed information for a particular project associated with an AWS account and region.
type ProjectDescription struct {
	Arn               *string            `json:"arn,omitempty"`
	CreatedDate       time.Time          `json:"createdDate"`
	Description       *string            `json:"description,omitempty"`
	PlacementTemplate *PlacementTemplate `json:"placementTemplate,omitempty"`
	ProjectName       string             `json:"projectName"`
	Tags              map[string]string  `json:"tags,omitempty"`
	UpdatedDate       time.Time          `json:"updatedDate"`
}
