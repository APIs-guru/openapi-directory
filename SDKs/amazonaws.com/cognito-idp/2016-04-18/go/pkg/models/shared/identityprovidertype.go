package shared

import (
	"time"
)

type IdentityProviderType struct {
	AttributeMapping map[string]string             `json:"AttributeMapping"`
	CreationDate     *time.Time                    `json:"CreationDate"`
	IdpIdentifiers   []string                      `json:"IdpIdentifiers"`
	LastModifiedDate *time.Time                    `json:"LastModifiedDate"`
	ProviderDetails  map[string]string             `json:"ProviderDetails"`
	ProviderName     *string                       `json:"ProviderName"`
	ProviderType     *IdentityProviderTypeTypeEnum `json:"ProviderType"`
	UserPoolID       *string                       `json:"UserPoolId"`
}
