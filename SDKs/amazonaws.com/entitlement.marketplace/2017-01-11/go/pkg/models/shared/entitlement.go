package shared

import (
	"time"
)

type Entitlement struct {
	CustomerIdentifier *string           `json:"CustomerIdentifier,omitempty"`
	Dimension          *string           `json:"Dimension,omitempty"`
	ExpirationDate     *time.Time        `json:"ExpirationDate,omitempty"`
	ProductCode        *string           `json:"ProductCode,omitempty"`
	Value              *EntitlementValue `json:"Value,omitempty"`
}
