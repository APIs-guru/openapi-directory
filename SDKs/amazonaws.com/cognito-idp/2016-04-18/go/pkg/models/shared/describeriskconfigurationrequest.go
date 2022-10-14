package shared

type DescribeRiskConfigurationRequest struct {
	ClientID   *string `json:"ClientId,omitempty"`
	UserPoolID string  `json:"UserPoolId"`
}
