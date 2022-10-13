package shared

import (
	"time"
)

type RegionDescription struct {
	DesiredNumberOfDomainControllers *int64                `json:"DesiredNumberOfDomainControllers"`
	DirectoryID                      *string               `json:"DirectoryId"`
	LastUpdatedDateTime              *time.Time            `json:"LastUpdatedDateTime"`
	LaunchTime                       *time.Time            `json:"LaunchTime"`
	RegionName                       *string               `json:"RegionName"`
	RegionType                       *RegionTypeEnum       `json:"RegionType"`
	Status                           *DirectoryStageEnum   `json:"Status"`
	StatusLastUpdatedDateTime        *time.Time            `json:"StatusLastUpdatedDateTime"`
	VpcSettings                      *DirectoryVpcSettings `json:"VpcSettings"`
}
