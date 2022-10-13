package shared

type DescribeFleetsRequest struct {
	Names     []string `json:"Names"`
	NextToken *string  `json:"NextToken"`
}
