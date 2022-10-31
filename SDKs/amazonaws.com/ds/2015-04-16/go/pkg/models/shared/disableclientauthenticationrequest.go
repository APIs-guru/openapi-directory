package shared



type DisableClientAuthenticationRequest struct {
    DirectoryID string `json:"DirectoryId"`
    Type ClientAuthenticationTypeEnum `json:"Type"`
    
}

