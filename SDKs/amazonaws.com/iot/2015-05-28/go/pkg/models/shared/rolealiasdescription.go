package shared

import (
	"time"
)

type RoleAliasDescription struct {
	CreationDate              *time.Time `json:"creationDate"`
	CredentialDurationSeconds *int64     `json:"credentialDurationSeconds"`
	LastModifiedDate          *time.Time `json:"lastModifiedDate"`
	Owner                     *string    `json:"owner"`
	RoleAlias                 *string    `json:"roleAlias"`
	RoleAliasArn              *string    `json:"roleAliasArn"`
	RoleArn                   *string    `json:"roleArn"`
}
