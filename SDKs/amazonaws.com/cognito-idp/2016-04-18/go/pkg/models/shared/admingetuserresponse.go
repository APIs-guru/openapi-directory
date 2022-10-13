package shared

import (
	"time"
)

type AdminGetUserResponse struct {
	Enabled              *bool               `json:"Enabled"`
	MfaOptions           []MfaOptionType     `json:"MFAOptions"`
	PreferredMfaSetting  *string             `json:"PreferredMfaSetting"`
	UserAttributes       []AttributeType     `json:"UserAttributes"`
	UserCreateDate       *time.Time          `json:"UserCreateDate"`
	UserLastModifiedDate *time.Time          `json:"UserLastModifiedDate"`
	UserMfaSettingList   []string            `json:"UserMFASettingList"`
	UserStatus           *UserStatusTypeEnum `json:"UserStatus"`
	Username             string              `json:"Username"`
}
