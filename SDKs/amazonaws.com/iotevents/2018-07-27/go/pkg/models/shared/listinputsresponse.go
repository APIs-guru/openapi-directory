package shared

type ListInputsResponse struct {
	InputSummaries []InputSummary `json:"inputSummaries,omitempty"`
	NextToken      *string        `json:"nextToken,omitempty"`
}
