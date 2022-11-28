package shared

// ListBuildsInput
// Represents the input for a request operation.
type ListBuildsInput struct {
	Limit     *int64           `json:"Limit,omitempty"`
	NextToken *string          `json:"NextToken,omitempty"`
	Status    *BuildStatusEnum `json:"Status,omitempty"`
}
