package shared

type CreateCustomRoutingListenerRequest struct {
	AcceleratorArn   string      `json:"AcceleratorArn"`
	IdempotencyToken string      `json:"IdempotencyToken"`
	PortRanges       []PortRange `json:"PortRanges"`
}
