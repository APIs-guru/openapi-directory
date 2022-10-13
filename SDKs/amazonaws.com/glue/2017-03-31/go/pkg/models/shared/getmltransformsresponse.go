package shared

type GetMlTransformsResponse struct {
	NextToken  *string       `json:"NextToken"`
	Transforms []MlTransform `json:"Transforms"`
}
