package shared

import (
	"time"
)

type AuthorizationCodesSharedModelsCodeValidationModel struct {
	ExpirationDate *time.Time `json:"ExpirationDate"`
	IsValid        *bool      `json:"IsValid"`
}
