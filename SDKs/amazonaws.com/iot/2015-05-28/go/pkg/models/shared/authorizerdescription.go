package shared

import (
	"time"
)

type AuthorizerDescription struct {
	AuthorizerArn          *string               `json:"authorizerArn"`
	AuthorizerFunctionArn  *string               `json:"authorizerFunctionArn"`
	AuthorizerName         *string               `json:"authorizerName"`
	CreationDate           *time.Time            `json:"creationDate"`
	LastModifiedDate       *time.Time            `json:"lastModifiedDate"`
	SigningDisabled        *bool                 `json:"signingDisabled"`
	Status                 *AuthorizerStatusEnum `json:"status"`
	TokenKeyName           *string               `json:"tokenKeyName"`
	TokenSigningPublicKeys map[string]string     `json:"tokenSigningPublicKeys"`
}
