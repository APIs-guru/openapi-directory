package shared

type CreateEnvironmentResponse struct {
	EnvironmentArn *string `json:"environmentArn,omitempty"`
	EnvironmentID  *string `json:"environmentId,omitempty"`
	EnvironmentURL *string `json:"environmentUrl,omitempty"`
}
