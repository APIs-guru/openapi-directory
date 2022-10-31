package shared



type DescribeSessionsRequest struct {
    AuthenticationType *AuthenticationTypeEnum `json:"AuthenticationType,omitempty"`
    FleetName string `json:"FleetName"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    StackName string `json:"StackName"`
    UserID *string `json:"UserId,omitempty"`
    
}

