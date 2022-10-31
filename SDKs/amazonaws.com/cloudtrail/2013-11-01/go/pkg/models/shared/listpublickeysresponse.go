package shared



type ListPublicKeysResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    PublicKeyList []PublicKey `json:"PublicKeyList,omitempty"`
    
}

