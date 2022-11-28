package shared

// AuthorizationConfig
// The authorization config in case the HTTP endpoint requires authorization.
type AuthorizationConfig struct {
	AuthorizationType AuthorizationTypeEnum `json:"authorizationType"`
	AwsIamConfig      *AwsIamConfig         `json:"awsIamConfig,omitempty"`
}
