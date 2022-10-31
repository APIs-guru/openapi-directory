package shared

import (
	"time"
)

type ProviderDescription struct {
	CreationDate     *time.Time                    `json:"CreationDate,omitempty"`
	LastModifiedDate *time.Time                    `json:"LastModifiedDate,omitempty"`
	ProviderName     *string                       `json:"ProviderName,omitempty"`
	ProviderType     *IdentityProviderTypeTypeEnum `json:"ProviderType,omitempty"`
}
