package shared

type DescribeSessionsRequest struct {
	AuthenticationType *AuthenticationTypeEnum `json:"AuthenticationType"`
	FleetName          string                  `json:"FleetName"`
	Limit              *int64                  `json:"Limit"`
	NextToken          *string                 `json:"NextToken"`
	StackName          string                  `json:"StackName"`
	UserID             *string                 `json:"UserId"`
}
