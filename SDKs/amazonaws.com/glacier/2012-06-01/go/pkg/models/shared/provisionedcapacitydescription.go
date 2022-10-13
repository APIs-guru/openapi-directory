package shared

type ProvisionedCapacityDescription struct {
	CapacityID     *string `json:"CapacityId"`
	ExpirationDate *string `json:"ExpirationDate"`
	StartDate      *string `json:"StartDate"`
}
