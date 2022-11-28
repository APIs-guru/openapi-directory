package shared

import (
	"time"
)

// UserPoolDescriptionType
// A user pool description.
type UserPoolDescriptionType struct {
	CreationDate     *time.Time        `json:"CreationDate,omitempty"`
	ID               *string           `json:"Id,omitempty"`
	LambdaConfig     *LambdaConfigType `json:"LambdaConfig,omitempty"`
	LastModifiedDate *time.Time        `json:"LastModifiedDate,omitempty"`
	Name             *string           `json:"Name,omitempty"`
	Status           *StatusTypeEnum   `json:"Status,omitempty"`
}
