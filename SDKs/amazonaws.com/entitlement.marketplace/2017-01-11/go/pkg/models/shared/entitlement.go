package shared

import (
	"time"
)

type Entitlement struct {
	CustomerIdentifier *string           `json:"CustomerIdentifier"`
	Dimension          *string           `json:"Dimension"`
	ExpirationDate     *time.Time        `json:"ExpirationDate"`
	ProductCode        *string           `json:"ProductCode"`
	Value              *EntitlementValue `json:"Value"`
}
