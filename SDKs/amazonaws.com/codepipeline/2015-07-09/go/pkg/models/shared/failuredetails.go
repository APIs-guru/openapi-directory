package shared

type FailureDetails struct {
	ExternalExecutionID *string         `json:"externalExecutionId"`
	Message             string          `json:"message"`
	Type                FailureTypeEnum `json:"type"`
}
