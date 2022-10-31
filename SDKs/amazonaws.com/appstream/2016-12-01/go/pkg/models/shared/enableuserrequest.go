package shared



type EnableUserRequest struct {
    AuthenticationType AuthenticationTypeEnum `json:"AuthenticationType"`
    UserName string `json:"UserName"`
    
}

