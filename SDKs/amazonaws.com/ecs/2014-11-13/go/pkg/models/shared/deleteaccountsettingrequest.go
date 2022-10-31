package shared



type DeleteAccountSettingRequest struct {
    Name SettingNameEnum `json:"name"`
    PrincipalArn *string `json:"principalArn,omitempty"`
    
}

