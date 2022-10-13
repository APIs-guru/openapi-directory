package shared

import (
	"time"
)

type ProjectDescription struct {
	Arn               *string            `json:"arn"`
	CreatedDate       time.Time          `json:"createdDate"`
	Description       *string            `json:"description"`
	PlacementTemplate *PlacementTemplate `json:"placementTemplate"`
	ProjectName       string             `json:"projectName"`
	Tags              map[string]string  `json:"tags"`
	UpdatedDate       time.Time          `json:"updatedDate"`
}
