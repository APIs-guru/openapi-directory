package shared

import (
	"time"
)

type DirectoryDescription struct {
	AccessURL                        *string                              `json:"AccessUrl,omitempty"`
	Alias                            *string                              `json:"Alias,omitempty"`
	ConnectSettings                  *DirectoryConnectSettingsDescription `json:"ConnectSettings,omitempty"`
	Description                      *string                              `json:"Description,omitempty"`
	DesiredNumberOfDomainControllers *int64                               `json:"DesiredNumberOfDomainControllers,omitempty"`
	DirectoryID                      *string                              `json:"DirectoryId,omitempty"`
	DNSIPAddrs                       []string                             `json:"DnsIpAddrs,omitempty"`
	Edition                          *DirectoryEditionEnum                `json:"Edition,omitempty"`
	LaunchTime                       *time.Time                           `json:"LaunchTime,omitempty"`
	Name                             *string                              `json:"Name,omitempty"`
	OwnerDirectoryDescription        *OwnerDirectoryDescription           `json:"OwnerDirectoryDescription,omitempty"`
	RadiusSettings                   *RadiusSettings                      `json:"RadiusSettings,omitempty"`
	RadiusStatus                     *RadiusStatusEnum                    `json:"RadiusStatus,omitempty"`
	RegionsInfo                      *RegionsInfo                         `json:"RegionsInfo,omitempty"`
	ShareMethod                      *ShareMethodEnum                     `json:"ShareMethod,omitempty"`
	ShareNotes                       *string                              `json:"ShareNotes,omitempty"`
	ShareStatus                      *ShareStatusEnum                     `json:"ShareStatus,omitempty"`
	ShortName                        *string                              `json:"ShortName,omitempty"`
	Size                             *DirectorySizeEnum                   `json:"Size,omitempty"`
	SsoEnabled                       *bool                                `json:"SsoEnabled,omitempty"`
	Stage                            *DirectoryStageEnum                  `json:"Stage,omitempty"`
	StageLastUpdatedDateTime         *time.Time                           `json:"StageLastUpdatedDateTime,omitempty"`
	StageReason                      *string                              `json:"StageReason,omitempty"`
	Type                             *DirectoryTypeEnum                   `json:"Type,omitempty"`
	VpcSettings                      *DirectoryVpcSettingsDescription     `json:"VpcSettings,omitempty"`
}
