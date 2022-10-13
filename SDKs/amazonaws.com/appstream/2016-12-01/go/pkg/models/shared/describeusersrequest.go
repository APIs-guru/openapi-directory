package shared

type DescribeUsersRequest struct {
	AuthenticationType AuthenticationTypeEnum `json:"AuthenticationType"`
	MaxResults         *int64                 `json:"MaxResults"`
	NextToken          *string                `json:"NextToken"`
}
