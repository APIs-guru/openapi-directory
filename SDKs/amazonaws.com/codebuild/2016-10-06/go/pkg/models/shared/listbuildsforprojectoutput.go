package shared

type ListBuildsForProjectOutput struct {
	Ids       []string `json:"ids,omitempty"`
	NextToken *string  `json:"nextToken,omitempty"`
}
