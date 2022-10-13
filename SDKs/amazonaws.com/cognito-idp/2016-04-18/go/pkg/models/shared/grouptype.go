package shared

import (
	"time"
)

type GroupType struct {
	CreationDate     *time.Time `json:"CreationDate"`
	Description      *string    `json:"Description"`
	GroupName        *string    `json:"GroupName"`
	LastModifiedDate *time.Time `json:"LastModifiedDate"`
	Precedence       *int64     `json:"Precedence"`
	RoleArn          *string    `json:"RoleArn"`
	UserPoolID       *string    `json:"UserPoolId"`
}
