package shared

// SecretsManagerSecretResourceData
// Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions.
type SecretsManagerSecretResourceData struct {
	Arn                               *string  `json:"ARN,omitempty"`
	AdditionalStagingLabelsToDownload []string `json:"AdditionalStagingLabelsToDownload,omitempty"`
}
