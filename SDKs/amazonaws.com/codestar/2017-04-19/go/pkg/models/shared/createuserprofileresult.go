package shared

import (
	"time"
)

type CreateUserProfileResult struct {
	CreatedTimestamp      *time.Time `json:"createdTimestamp"`
	DisplayName           *string    `json:"displayName"`
	EmailAddress          *string    `json:"emailAddress"`
	LastModifiedTimestamp *time.Time `json:"lastModifiedTimestamp"`
	SSHPublicKey          *string    `json:"sshPublicKey"`
	UserArn               string     `json:"userArn"`
}
