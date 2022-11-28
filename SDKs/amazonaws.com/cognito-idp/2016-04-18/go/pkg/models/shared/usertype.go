package shared

import (
	"time"
)

// UserType
// The user type.
type UserType struct {
	Attributes           []AttributeType     `json:"Attributes,omitempty"`
	Enabled              *bool               `json:"Enabled,omitempty"`
	MfaOptions           []MfaOptionType     `json:"MFAOptions,omitempty"`
	UserCreateDate       *time.Time          `json:"UserCreateDate,omitempty"`
	UserLastModifiedDate *time.Time          `json:"UserLastModifiedDate,omitempty"`
	UserStatus           *UserStatusTypeEnum `json:"UserStatus,omitempty"`
	Username             *string             `json:"Username,omitempty"`
}
