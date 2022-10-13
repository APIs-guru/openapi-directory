package shared

type Account struct {
	APIKeyVersion     *string           `json:"apiKeyVersion"`
	CloudwatchRoleArn *string           `json:"cloudwatchRoleArn"`
	Features          []string          `json:"features"`
	ThrottleSettings  *ThrottleSettings `json:"throttleSettings"`
}
