package shared

type CreateEnvironmentResponse struct {
	EnvironmentArn *string `json:"environmentArn"`
	EnvironmentID  *string `json:"environmentId"`
	EnvironmentURL *string `json:"environmentUrl"`
}
