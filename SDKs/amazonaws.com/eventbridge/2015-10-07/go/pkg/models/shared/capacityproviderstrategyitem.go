package shared

type CapacityProviderStrategyItem struct {
	Base             *int64 `json:"base,omitempty"`
	CapacityProvider string `json:"capacityProvider"`
	Weight           *int64 `json:"weight,omitempty"`
}
