package shared

type SelectResourceConfigRequest struct {
	Expression string  `json:"Expression"`
	Limit      *int64  `json:"Limit"`
	NextToken  *string `json:"NextToken"`
}
