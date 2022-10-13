package shared

import (
	"time"
)

type UICustomizationType struct {
	CSS              *string    `json:"CSS"`
	CSSVersion       *string    `json:"CSSVersion"`
	ClientID         *string    `json:"ClientId"`
	CreationDate     *time.Time `json:"CreationDate"`
	ImageURL         *string    `json:"ImageUrl"`
	LastModifiedDate *time.Time `json:"LastModifiedDate"`
	UserPoolID       *string    `json:"UserPoolId"`
}
