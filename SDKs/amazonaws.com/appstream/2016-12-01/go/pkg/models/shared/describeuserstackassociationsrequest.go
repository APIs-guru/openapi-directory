package shared

type DescribeUserStackAssociationsRequest struct {
	AuthenticationType *AuthenticationTypeEnum `json:"AuthenticationType"`
	MaxResults         *int64                  `json:"MaxResults"`
	NextToken          *string                 `json:"NextToken"`
	StackName          *string                 `json:"StackName"`
	UserName           *string                 `json:"UserName"`
}
