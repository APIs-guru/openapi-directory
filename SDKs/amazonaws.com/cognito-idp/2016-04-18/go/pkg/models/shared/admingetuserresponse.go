package shared

import (
	"time"
)

type AdminGetUserResponse struct {
	Enabled              *bool               `json:"Enabled,omitempty"`
	MfaOptions           []MfaOptionType     `json:"MFAOptions,omitempty"`
	PreferredMfaSetting  *string             `json:"PreferredMfaSetting,omitempty"`
	UserAttributes       []AttributeType     `json:"UserAttributes,omitempty"`
	UserCreateDate       *time.Time          `json:"UserCreateDate,omitempty"`
	UserLastModifiedDate *time.Time          `json:"UserLastModifiedDate,omitempty"`
	UserMfaSettingList   []string            `json:"UserMFASettingList,omitempty"`
	UserStatus           *UserStatusTypeEnum `json:"UserStatus,omitempty"`
	Username             string              `json:"Username"`
}
