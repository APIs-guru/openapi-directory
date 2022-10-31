package shared



type AdminRemoveUserFromGroupRequest struct {
    GroupName string `json:"GroupName"`
    UserPoolID string `json:"UserPoolId"`
    Username string `json:"Username"`
    
}

