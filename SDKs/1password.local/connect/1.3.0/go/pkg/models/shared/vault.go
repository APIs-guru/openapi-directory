package shared

import (
"time")


type VaultTypeEnum string

const (
    VaultTypeEnumUserCreated VaultTypeEnum = "USER_CREATED"
VaultTypeEnumPersonal VaultTypeEnum = "PERSONAL"
VaultTypeEnumEveryone VaultTypeEnum = "EVERYONE"
VaultTypeEnumTransfer VaultTypeEnum = "TRANSFER"
)


type Vault struct {
    AttributeVersion *int64 `json:"attributeVersion,omitempty"`
    ContentVersion *int64 `json:"contentVersion,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    Items *int64 `json:"items,omitempty"`
    Name *string `json:"name,omitempty"`
    Type *VaultTypeEnum `json:"type,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    
}

