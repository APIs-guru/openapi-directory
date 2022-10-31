package shared



type DescribeUsersRequest struct {
    AuthenticationType AuthenticationTypeEnum `json:"AuthenticationType"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

