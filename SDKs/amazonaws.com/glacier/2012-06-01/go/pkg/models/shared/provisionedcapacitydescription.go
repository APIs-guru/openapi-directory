package shared

// ProvisionedCapacityDescription
// The definition for a provisioned capacity unit.
type ProvisionedCapacityDescription struct {
	CapacityID     *string `json:"CapacityId,omitempty"`
	ExpirationDate *string `json:"ExpirationDate,omitempty"`
	StartDate      *string `json:"StartDate,omitempty"`
}
