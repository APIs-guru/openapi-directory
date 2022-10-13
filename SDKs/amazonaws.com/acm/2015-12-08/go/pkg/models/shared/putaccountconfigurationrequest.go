package shared

type PutAccountConfigurationRequest struct {
	ExpiryEvents     *ExpiryEventsConfiguration `json:"ExpiryEvents"`
	IdempotencyToken string                     `json:"IdempotencyToken"`
}
