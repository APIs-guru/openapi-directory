package shared

type ListIndicesResponse struct {
	IndexNames []string `json:"indexNames"`
	NextToken  *string  `json:"nextToken"`
}
