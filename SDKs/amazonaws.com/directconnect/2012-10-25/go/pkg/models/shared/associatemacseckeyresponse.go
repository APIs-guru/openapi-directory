package shared



type AssociateMacSecKeyResponse struct {
    ConnectionID *string `json:"connectionId,omitempty"`
    MacSecKeys []MacSecKey `json:"macSecKeys,omitempty"`
    
}

