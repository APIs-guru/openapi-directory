package shared

import (
	"time"
)

// AuthorizerDescription
// The authorizer description.
type AuthorizerDescription struct {
	AuthorizerArn          *string               `json:"authorizerArn,omitempty"`
	AuthorizerFunctionArn  *string               `json:"authorizerFunctionArn,omitempty"`
	AuthorizerName         *string               `json:"authorizerName,omitempty"`
	CreationDate           *time.Time            `json:"creationDate,omitempty"`
	LastModifiedDate       *time.Time            `json:"lastModifiedDate,omitempty"`
	SigningDisabled        *bool                 `json:"signingDisabled,omitempty"`
	Status                 *AuthorizerStatusEnum `json:"status,omitempty"`
	TokenKeyName           *string               `json:"tokenKeyName,omitempty"`
	TokenSigningPublicKeys map[string]string     `json:"tokenSigningPublicKeys,omitempty"`
}
