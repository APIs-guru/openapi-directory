package shared



type DescribeUserStackAssociationsRequest struct {
    AuthenticationType *AuthenticationTypeEnum `json:"AuthenticationType,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    StackName *string `json:"StackName,omitempty"`
    UserName *string `json:"UserName,omitempty"`
    
}

