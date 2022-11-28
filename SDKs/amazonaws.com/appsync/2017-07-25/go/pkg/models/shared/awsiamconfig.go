package shared

// AwsIamConfig
// The Identity and Access Management configuration.
type AwsIamConfig struct {
	SigningRegion      *string `json:"signingRegion,omitempty"`
	SigningServiceName *string `json:"signingServiceName,omitempty"`
}
