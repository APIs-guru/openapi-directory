package shared

type DescribeFleetsRequest struct {
	Names     []string `json:"Names,omitempty"`
	NextToken *string  `json:"NextToken,omitempty"`
}
