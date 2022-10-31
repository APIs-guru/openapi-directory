package shared



type DisableLdapsRequest struct {
    DirectoryID string `json:"DirectoryId"`
    Type LdapsTypeEnum `json:"Type"`
    
}

