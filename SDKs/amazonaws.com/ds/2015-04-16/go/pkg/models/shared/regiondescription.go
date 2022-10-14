package shared

import (
	"time"
)

type RegionDescription struct {
	DesiredNumberOfDomainControllers *int64                `json:"DesiredNumberOfDomainControllers,omitempty"`
	DirectoryID                      *string               `json:"DirectoryId,omitempty"`
	LastUpdatedDateTime              *time.Time            `json:"LastUpdatedDateTime,omitempty"`
	LaunchTime                       *time.Time            `json:"LaunchTime,omitempty"`
	RegionName                       *string               `json:"RegionName,omitempty"`
	RegionType                       *RegionTypeEnum       `json:"RegionType,omitempty"`
	Status                           *DirectoryStageEnum   `json:"Status,omitempty"`
	StatusLastUpdatedDateTime        *time.Time            `json:"StatusLastUpdatedDateTime,omitempty"`
	VpcSettings                      *DirectoryVpcSettings `json:"VpcSettings,omitempty"`
}
