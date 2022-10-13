package shared

type CreateInterconnectRequest struct {
	Bandwidth        string  `json:"bandwidth"`
	InterconnectName string  `json:"interconnectName"`
	LagID            *string `json:"lagId"`
	Location         string  `json:"location"`
	ProviderName     *string `json:"providerName"`
	Tags             []Tag   `json:"tags"`
}
