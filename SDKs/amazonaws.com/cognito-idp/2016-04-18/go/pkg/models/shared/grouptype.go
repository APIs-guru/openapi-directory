package shared

import (
	"time"
)

type GroupType struct {
	CreationDate     *time.Time `json:"CreationDate,omitempty"`
	Description      *string    `json:"Description,omitempty"`
	GroupName        *string    `json:"GroupName,omitempty"`
	LastModifiedDate *time.Time `json:"LastModifiedDate,omitempty"`
	Precedence       *int64     `json:"Precedence,omitempty"`
	RoleArn          *string    `json:"RoleArn,omitempty"`
	UserPoolID       *string    `json:"UserPoolId,omitempty"`
}
