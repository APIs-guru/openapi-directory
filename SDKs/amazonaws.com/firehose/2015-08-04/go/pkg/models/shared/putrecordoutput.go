package shared



type PutRecordOutput struct {
    Encrypted *bool `json:"Encrypted,omitempty"`
    RecordID string `json:"RecordId"`
    
}

