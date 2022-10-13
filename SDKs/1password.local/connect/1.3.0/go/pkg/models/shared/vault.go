package shared

import (
	"time"
)

type VaultTypeEnum string

const (
	VaultTypeEnumUserCreated VaultTypeEnum = "USER_CREATED"
	VaultTypeEnumPersonal    VaultTypeEnum = "PERSONAL"
	VaultTypeEnumEveryone    VaultTypeEnum = "EVERYONE"
	VaultTypeEnumTransfer    VaultTypeEnum = "TRANSFER"
)

type Vault struct {
	AttributeVersion *int64         `json:"attributeVersion"`
	ContentVersion   *int64         `json:"contentVersion"`
	CreatedAt        *time.Time     `json:"createdAt"`
	Description      *string        `json:"description"`
	ID               *string        `json:"id"`
	Items            *int64         `json:"items"`
	Name             *string        `json:"name"`
	Type             *VaultTypeEnum `json:"type"`
	UpdatedAt        *time.Time     `json:"updatedAt"`
}
