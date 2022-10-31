package shared



type KmsGrantConfiguration struct {
    Constraints *KmsGrantConstraints `json:"constraints,omitempty"`
    GranteePrincipal string `json:"granteePrincipal"`
    IssuingAccount string `json:"issuingAccount"`
    Operations []KmsGrantOperationEnum `json:"operations"`
    RetiringPrincipal *string `json:"retiringPrincipal,omitempty"`
    
}

