package shared

import (
	"time"
)

// RoleAliasDescription
// Role alias description.
type RoleAliasDescription struct {
	CreationDate              *time.Time `json:"creationDate,omitempty"`
	CredentialDurationSeconds *int64     `json:"credentialDurationSeconds,omitempty"`
	LastModifiedDate          *time.Time `json:"lastModifiedDate,omitempty"`
	Owner                     *string    `json:"owner,omitempty"`
	RoleAlias                 *string    `json:"roleAlias,omitempty"`
	RoleAliasArn              *string    `json:"roleAliasArn,omitempty"`
	RoleArn                   *string    `json:"roleArn,omitempty"`
}
