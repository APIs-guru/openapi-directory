package shared

type ListTaskDefinitionFamiliesResponse struct {
	Families  []string `json:"families,omitempty"`
	NextToken *string  `json:"nextToken,omitempty"`
}
