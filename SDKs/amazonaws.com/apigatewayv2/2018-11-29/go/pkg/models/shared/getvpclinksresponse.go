package shared

type GetVpcLinksResponse struct {
	Items     []VpcLink `json:"Items,omitempty"`
	NextToken *string   `json:"NextToken,omitempty"`
}
