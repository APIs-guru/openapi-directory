package shared



type ResetUserPasswordRequest struct {
    DirectoryID string `json:"DirectoryId"`
    NewPassword string `json:"NewPassword"`
    UserName string `json:"UserName"`
    
}

