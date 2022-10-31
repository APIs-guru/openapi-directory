package shared



type SignUpResponse struct {
    CodeDeliveryDetails *CodeDeliveryDetailsType `json:"CodeDeliveryDetails,omitempty"`
    UserConfirmed bool `json:"UserConfirmed"`
    UserSub string `json:"UserSub"`
    
}

