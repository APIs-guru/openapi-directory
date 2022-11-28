package shared

// AcknowledgeThirdPartyJobOutput
// Represents the output of an AcknowledgeThirdPartyJob action.
type AcknowledgeThirdPartyJobOutput struct {
	Status *JobStatusEnum `json:"status,omitempty"`
}
