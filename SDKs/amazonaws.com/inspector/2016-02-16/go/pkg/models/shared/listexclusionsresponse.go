package shared

type ListExclusionsResponse struct {
	ExclusionArns []string `json:"exclusionArns"`
	NextToken     *string  `json:"nextToken,omitempty"`
}
