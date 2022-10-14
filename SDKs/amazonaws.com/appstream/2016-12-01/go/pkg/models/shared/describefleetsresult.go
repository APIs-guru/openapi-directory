package shared

type DescribeFleetsResult struct {
	Fleets    []Fleet `json:"Fleets,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
