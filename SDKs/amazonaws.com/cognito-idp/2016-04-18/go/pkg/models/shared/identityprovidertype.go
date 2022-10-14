package shared

import (
	"time"
)

type IdentityProviderType struct {
	AttributeMapping map[string]string             `json:"AttributeMapping,omitempty"`
	CreationDate     *time.Time                    `json:"CreationDate,omitempty"`
	IdpIdentifiers   []string                      `json:"IdpIdentifiers,omitempty"`
	LastModifiedDate *time.Time                    `json:"LastModifiedDate,omitempty"`
	ProviderDetails  map[string]string             `json:"ProviderDetails,omitempty"`
	ProviderName     *string                       `json:"ProviderName,omitempty"`
	ProviderType     *IdentityProviderTypeTypeEnum `json:"ProviderType,omitempty"`
	UserPoolID       *string                       `json:"UserPoolId,omitempty"`
}
