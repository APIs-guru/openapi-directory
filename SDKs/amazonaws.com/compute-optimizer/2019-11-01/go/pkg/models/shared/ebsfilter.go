package shared

type EbsFilter struct {
	Name   *EbsFilterNameEnum `json:"name"`
	Values []string           `json:"values"`
}
