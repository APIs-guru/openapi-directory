package shared

type ListIndicesResponse struct {
	IndexNames []string `json:"indexNames,omitempty"`
	NextToken  *string  `json:"nextToken,omitempty"`
}
