package shared

import (
	"time"
)

type User struct {
	Arn                *string                `json:"Arn"`
	AuthenticationType AuthenticationTypeEnum `json:"AuthenticationType"`
	CreatedTime        *time.Time             `json:"CreatedTime"`
	Enabled            *bool                  `json:"Enabled"`
	FirstName          *string                `json:"FirstName"`
	LastName           *string                `json:"LastName"`
	Status             *string                `json:"Status"`
	UserName           *string                `json:"UserName"`
}
