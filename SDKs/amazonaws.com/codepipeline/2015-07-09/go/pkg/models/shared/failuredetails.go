package shared

// FailureDetails
// Represents information about failure details.
type FailureDetails struct {
	ExternalExecutionID *string         `json:"externalExecutionId,omitempty"`
	Message             string          `json:"message"`
	Type                FailureTypeEnum `json:"type"`
}
