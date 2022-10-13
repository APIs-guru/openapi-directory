package shared

type ListUpdatesResponse struct {
	NextToken *string  `json:"nextToken"`
	UpdateIds []string `json:"updateIds"`
}
