package shared

type DescribeTrustsResult struct {
	NextToken *string `json:"NextToken"`
	Trusts    []Trust `json:"Trusts"`
}
