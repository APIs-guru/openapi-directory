package shared

import (
	"time"
)

type AuthorizationCodesSharedModelsCodeValidationModel struct {
	ExpirationDate *time.Time `json:"ExpirationDate,omitempty"`
	IsValid        *bool      `json:"IsValid,omitempty"`
}
