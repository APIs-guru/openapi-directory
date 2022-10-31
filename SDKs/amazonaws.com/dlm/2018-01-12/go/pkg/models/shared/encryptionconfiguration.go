package shared



type EncryptionConfiguration struct {
    CmkArn *string `json:"CmkArn,omitempty"`
    Encrypted bool `json:"Encrypted"`
    
}

