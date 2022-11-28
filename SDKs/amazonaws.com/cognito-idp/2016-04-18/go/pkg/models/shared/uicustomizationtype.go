package shared

import (
	"time"
)

// UICustomizationType
// A container for the UI customization information for a user pool's built-in app UI.
type UICustomizationType struct {
	CSS              *string    `json:"CSS,omitempty"`
	CSSVersion       *string    `json:"CSSVersion,omitempty"`
	ClientID         *string    `json:"ClientId,omitempty"`
	CreationDate     *time.Time `json:"CreationDate,omitempty"`
	ImageURL         *string    `json:"ImageUrl,omitempty"`
	LastModifiedDate *time.Time `json:"LastModifiedDate,omitempty"`
	UserPoolID       *string    `json:"UserPoolId,omitempty"`
}
