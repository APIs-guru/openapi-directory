package shared

type ListInputsResponse struct {
	InputSummaries []InputSummary `json:"inputSummaries"`
	NextToken      *string        `json:"nextToken"`
}
