package shared

type CapacityProviderStrategyItem struct {
	Base             *int64 `json:"base"`
	CapacityProvider string `json:"capacityProvider"`
	Weight           *int64 `json:"weight"`
}
