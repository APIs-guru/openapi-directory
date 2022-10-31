package shared



type PutAccountSettingRequest struct {
    Name SettingNameEnum `json:"name"`
    PrincipalArn *string `json:"principalArn,omitempty"`
    Value string `json:"value"`
    
}

