package shared

type SecretsManagerSecretResourceData struct {
	Arn                               *string  `json:"ARN"`
	AdditionalStagingLabelsToDownload []string `json:"AdditionalStagingLabelsToDownload"`
}
