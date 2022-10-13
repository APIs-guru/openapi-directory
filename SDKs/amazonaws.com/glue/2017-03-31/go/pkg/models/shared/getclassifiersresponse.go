package shared

type GetClassifiersResponse struct {
	Classifiers []Classifier `json:"Classifiers"`
	NextToken   *string      `json:"NextToken"`
}
