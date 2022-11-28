package shared

import (
	"time"
)

// ProviderDescription
// A container for identity provider details.
type ProviderDescription struct {
	CreationDate     *time.Time                    `json:"CreationDate,omitempty"`
	LastModifiedDate *time.Time                    `json:"LastModifiedDate,omitempty"`
	ProviderName     *string                       `json:"ProviderName,omitempty"`
	ProviderType     *IdentityProviderTypeTypeEnum `json:"ProviderType,omitempty"`
}
