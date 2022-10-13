package shared

import (
	"time"
)

type UserPoolDescriptionType struct {
	CreationDate     *time.Time        `json:"CreationDate"`
	ID               *string           `json:"Id"`
	LambdaConfig     *LambdaConfigType `json:"LambdaConfig"`
	LastModifiedDate *time.Time        `json:"LastModifiedDate"`
	Name             *string           `json:"Name"`
	Status           *StatusTypeEnum   `json:"Status"`
}
