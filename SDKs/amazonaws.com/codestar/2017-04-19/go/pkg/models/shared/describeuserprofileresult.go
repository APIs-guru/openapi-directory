package shared

import (
	"time"
)

type DescribeUserProfileResult struct {
	CreatedTimestamp      time.Time `json:"createdTimestamp"`
	DisplayName           *string   `json:"displayName,omitempty"`
	EmailAddress          *string   `json:"emailAddress,omitempty"`
	LastModifiedTimestamp time.Time `json:"lastModifiedTimestamp"`
	SSHPublicKey          *string   `json:"sshPublicKey,omitempty"`
	UserArn               string    `json:"userArn"`
}
