package shared

import (
	"time"
)

type UserType struct {
	Attributes           []AttributeType     `json:"Attributes"`
	Enabled              *bool               `json:"Enabled"`
	MfaOptions           []MfaOptionType     `json:"MFAOptions"`
	UserCreateDate       *time.Time          `json:"UserCreateDate"`
	UserLastModifiedDate *time.Time          `json:"UserLastModifiedDate"`
	UserStatus           *UserStatusTypeEnum `json:"UserStatus"`
	Username             *string             `json:"Username"`
}
