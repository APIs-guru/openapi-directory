package shared

type DescribeFleetsResult struct {
	Fleets    []Fleet `json:"Fleets"`
	NextToken *string `json:"NextToken"`
}
