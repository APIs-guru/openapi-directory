package shared



type APIModelsAuthenticatedUser struct {
    Email *string `json:"Email,omitempty"`
    MacID *string `json:"MACId,omitempty"`
    MacToken *string `json:"MACToken,omitempty"`
    Name *string `json:"Name,omitempty"`
    Token *string `json:"Token,omitempty"`
    UserID *int32 `json:"UserID,omitempty"`
    Username *string `json:"Username,omitempty"`
    
}

