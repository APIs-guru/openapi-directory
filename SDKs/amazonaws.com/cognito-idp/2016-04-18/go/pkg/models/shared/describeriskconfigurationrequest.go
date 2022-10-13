package shared

type DescribeRiskConfigurationRequest struct {
	ClientID   *string `json:"ClientId"`
	UserPoolID string  `json:"UserPoolId"`
}
