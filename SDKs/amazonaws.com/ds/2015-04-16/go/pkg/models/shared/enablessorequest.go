package shared



type EnableSsoRequest struct {
    DirectoryID string `json:"DirectoryId"`
    Password *string `json:"Password,omitempty"`
    UserName *string `json:"UserName,omitempty"`
    
}

