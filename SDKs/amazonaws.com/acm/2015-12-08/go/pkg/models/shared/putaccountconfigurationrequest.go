package shared



type PutAccountConfigurationRequest struct {
    ExpiryEvents *ExpiryEventsConfiguration `json:"ExpiryEvents,omitempty"`
    IdempotencyToken string `json:"IdempotencyToken"`
    
}

