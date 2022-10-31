package shared



type DisassociateMacSecKeyRequest struct {
    ConnectionID string `json:"connectionId"`
    SecretArn string `json:"secretARN"`
    
}

