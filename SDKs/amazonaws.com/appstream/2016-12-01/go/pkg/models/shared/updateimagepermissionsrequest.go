package shared



type UpdateImagePermissionsRequest struct {
    ImagePermissions ImagePermissions `json:"ImagePermissions"`
    Name string `json:"Name"`
    SharedAccountID string `json:"SharedAccountId"`
    
}

