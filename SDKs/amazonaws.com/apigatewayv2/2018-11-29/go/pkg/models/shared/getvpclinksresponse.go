package shared

type GetVpcLinksResponse struct {
	Items     []VpcLink `json:"Items"`
	NextToken *string   `json:"NextToken"`
}
