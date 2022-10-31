package shared



type CertificateValidationRecord struct {
    Name *string `json:"Name,omitempty"`
    Status *CertificateValidationRecordStatusEnum `json:"Status,omitempty"`
    Type *string `json:"Type,omitempty"`
    Value *string `json:"Value,omitempty"`
    
}

