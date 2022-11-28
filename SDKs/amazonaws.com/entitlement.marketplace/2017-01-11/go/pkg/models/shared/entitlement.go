package shared

import (
	"time"
)

// Entitlement
// An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.
type Entitlement struct {
	CustomerIdentifier *string           `json:"CustomerIdentifier,omitempty"`
	Dimension          *string           `json:"Dimension,omitempty"`
	ExpirationDate     *time.Time        `json:"ExpirationDate,omitempty"`
	ProductCode        *string           `json:"ProductCode,omitempty"`
	Value              *EntitlementValue `json:"Value,omitempty"`
}
