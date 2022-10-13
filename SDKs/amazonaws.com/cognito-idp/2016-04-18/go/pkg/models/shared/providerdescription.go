package shared

import (
	"time"
)

type ProviderDescription struct {
	CreationDate     *time.Time                    `json:"CreationDate"`
	LastModifiedDate *time.Time                    `json:"LastModifiedDate"`
	ProviderName     *string                       `json:"ProviderName"`
	ProviderType     *IdentityProviderTypeTypeEnum `json:"ProviderType"`
}
