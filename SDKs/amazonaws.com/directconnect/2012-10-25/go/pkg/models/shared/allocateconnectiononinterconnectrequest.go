package shared

type AllocateConnectionOnInterconnectRequest struct {
	Bandwidth      string `json:"bandwidth"`
	ConnectionName string `json:"connectionName"`
	InterconnectID string `json:"interconnectId"`
	OwnerAccount   string `json:"ownerAccount"`
	Vlan           int64  `json:"vlan"`
}
