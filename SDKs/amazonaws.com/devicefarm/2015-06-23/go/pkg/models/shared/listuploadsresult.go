package shared

type ListUploadsResult struct {
	NextToken *string  `json:"nextToken"`
	Uploads   []Upload `json:"uploads"`
}
