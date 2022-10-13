package shared

import (
	"time"
)

type DirectoryDescription struct {
	AccessURL                        *string                              `json:"AccessUrl"`
	Alias                            *string                              `json:"Alias"`
	ConnectSettings                  *DirectoryConnectSettingsDescription `json:"ConnectSettings"`
	Description                      *string                              `json:"Description"`
	DesiredNumberOfDomainControllers *int64                               `json:"DesiredNumberOfDomainControllers"`
	DirectoryID                      *string                              `json:"DirectoryId"`
	DNSIPAddrs                       []string                             `json:"DnsIpAddrs"`
	Edition                          *DirectoryEditionEnum                `json:"Edition"`
	LaunchTime                       *time.Time                           `json:"LaunchTime"`
	Name                             *string                              `json:"Name"`
	OwnerDirectoryDescription        *OwnerDirectoryDescription           `json:"OwnerDirectoryDescription"`
	RadiusSettings                   *RadiusSettings                      `json:"RadiusSettings"`
	RadiusStatus                     *RadiusStatusEnum                    `json:"RadiusStatus"`
	RegionsInfo                      *RegionsInfo                         `json:"RegionsInfo"`
	ShareMethod                      *ShareMethodEnum                     `json:"ShareMethod"`
	ShareNotes                       *string                              `json:"ShareNotes"`
	ShareStatus                      *ShareStatusEnum                     `json:"ShareStatus"`
	ShortName                        *string                              `json:"ShortName"`
	Size                             *DirectorySizeEnum                   `json:"Size"`
	SsoEnabled                       *bool                                `json:"SsoEnabled"`
	Stage                            *DirectoryStageEnum                  `json:"Stage"`
	StageLastUpdatedDateTime         *time.Time                           `json:"StageLastUpdatedDateTime"`
	StageReason                      *string                              `json:"StageReason"`
	Type                             *DirectoryTypeEnum                   `json:"Type"`
	VpcSettings                      *DirectoryVpcSettingsDescription     `json:"VpcSettings"`
}
