package shared

// CapacityProviderStrategyItem
// The details of a capacity provider strategy. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html">CapacityProviderStrategyItem</a> in the Amazon ECS API Reference.
type CapacityProviderStrategyItem struct {
	Base             *int64 `json:"base,omitempty"`
	CapacityProvider string `json:"capacityProvider"`
	Weight           *int64 `json:"weight,omitempty"`
}
