package shared

type AuthorizationConfig struct {
	AuthorizationType AuthorizationTypeEnum `json:"authorizationType"`
	AwsIamConfig      *AwsIamConfig         `json:"awsIamConfig,omitempty"`
}
