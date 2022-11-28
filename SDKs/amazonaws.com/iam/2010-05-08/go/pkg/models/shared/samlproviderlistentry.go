package shared

import (
	"time"
)

// SamlProviderListEntry
// Contains the list of SAML providers for this account.
type SamlProviderListEntry struct {
	Arn        *string
	CreateDate *time.Time
	ValidUntil *time.Time
}
