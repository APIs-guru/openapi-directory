package shared

import (
	"time"
)

type Connection struct {
	AwsDevice            *string                   `json:"awsDevice,omitempty"`
	AwsDeviceV2          *string                   `json:"awsDeviceV2,omitempty"`
	AwsLogicalDeviceID   *string                   `json:"awsLogicalDeviceId,omitempty"`
	Bandwidth            *string                   `json:"bandwidth,omitempty"`
	ConnectionID         *string                   `json:"connectionId,omitempty"`
	ConnectionName       *string                   `json:"connectionName,omitempty"`
	ConnectionState      *ConnectionStateEnum      `json:"connectionState,omitempty"`
	EncryptionMode       *string                   `json:"encryptionMode,omitempty"`
	HasLogicalRedundancy *HasLogicalRedundancyEnum `json:"hasLogicalRedundancy,omitempty"`
	JumboFrameCapable    *bool                     `json:"jumboFrameCapable,omitempty"`
	LagID                *string                   `json:"lagId,omitempty"`
	LoaIssueTime         *time.Time                `json:"loaIssueTime,omitempty"`
	Location             *string                   `json:"location,omitempty"`
	MacSecCapable        *bool                     `json:"macSecCapable,omitempty"`
	MacSecKeys           []MacSecKey               `json:"macSecKeys,omitempty"`
	OwnerAccount         *string                   `json:"ownerAccount,omitempty"`
	PartnerName          *string                   `json:"partnerName,omitempty"`
	PortEncryptionStatus *string                   `json:"portEncryptionStatus,omitempty"`
	ProviderName         *string                   `json:"providerName,omitempty"`
	Region               *string                   `json:"region,omitempty"`
	Tags                 []Tag                     `json:"tags,omitempty"`
	Vlan                 *int64                    `json:"vlan,omitempty"`
}
