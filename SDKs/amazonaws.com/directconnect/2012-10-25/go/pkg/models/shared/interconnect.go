package shared

import (
	"time"
)

type Interconnect struct {
	AwsDevice            *string                   `json:"awsDevice"`
	AwsDeviceV2          *string                   `json:"awsDeviceV2"`
	AwsLogicalDeviceID   *string                   `json:"awsLogicalDeviceId"`
	Bandwidth            *string                   `json:"bandwidth"`
	HasLogicalRedundancy *HasLogicalRedundancyEnum `json:"hasLogicalRedundancy"`
	InterconnectID       *string                   `json:"interconnectId"`
	InterconnectName     *string                   `json:"interconnectName"`
	InterconnectState    *InterconnectStateEnum    `json:"interconnectState"`
	JumboFrameCapable    *bool                     `json:"jumboFrameCapable"`
	LagID                *string                   `json:"lagId"`
	LoaIssueTime         *time.Time                `json:"loaIssueTime"`
	Location             *string                   `json:"location"`
	ProviderName         *string                   `json:"providerName"`
	Region               *string                   `json:"region"`
	Tags                 []Tag                     `json:"tags"`
}
