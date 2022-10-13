package shared

import (
	"time"
)

type Connection struct {
	AwsDevice            *string                   `json:"awsDevice"`
	AwsDeviceV2          *string                   `json:"awsDeviceV2"`
	AwsLogicalDeviceID   *string                   `json:"awsLogicalDeviceId"`
	Bandwidth            *string                   `json:"bandwidth"`
	ConnectionID         *string                   `json:"connectionId"`
	ConnectionName       *string                   `json:"connectionName"`
	ConnectionState      *ConnectionStateEnum      `json:"connectionState"`
	EncryptionMode       *string                   `json:"encryptionMode"`
	HasLogicalRedundancy *HasLogicalRedundancyEnum `json:"hasLogicalRedundancy"`
	JumboFrameCapable    *bool                     `json:"jumboFrameCapable"`
	LagID                *string                   `json:"lagId"`
	LoaIssueTime         *time.Time                `json:"loaIssueTime"`
	Location             *string                   `json:"location"`
	MacSecCapable        *bool                     `json:"macSecCapable"`
	MacSecKeys           []MacSecKey               `json:"macSecKeys"`
	OwnerAccount         *string                   `json:"ownerAccount"`
	PartnerName          *string                   `json:"partnerName"`
	PortEncryptionStatus *string                   `json:"portEncryptionStatus"`
	ProviderName         *string                   `json:"providerName"`
	Region               *string                   `json:"region"`
	Tags                 []Tag                     `json:"tags"`
	Vlan                 *int64                    `json:"vlan"`
}
