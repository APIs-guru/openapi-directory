package shared

type CreateListenerRequest struct {
	AcceleratorArn   string              `json:"AcceleratorArn"`
	ClientAffinity   *ClientAffinityEnum `json:"ClientAffinity,omitempty"`
	IdempotencyToken string              `json:"IdempotencyToken"`
	PortRanges       []PortRange         `json:"PortRanges"`
	Protocol         ProtocolEnum        `json:"Protocol"`
}
