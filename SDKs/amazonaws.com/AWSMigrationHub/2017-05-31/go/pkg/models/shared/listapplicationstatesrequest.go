package shared

type ListApplicationStatesRequest struct {
	ApplicationIds []string `json:"ApplicationIds"`
	MaxResults     *int64   `json:"MaxResults"`
	NextToken      *string  `json:"NextToken"`
}
