package shared



type AdminListDevicesRequest struct {
    Limit *int64 `json:"Limit,omitempty"`
    PaginationToken *string `json:"PaginationToken,omitempty"`
    UserPoolID string `json:"UserPoolId"`
    Username string `json:"Username"`
    
}

