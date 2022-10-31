package shared

type ListAssociatedStacksRequest struct {
	FleetName string  `json:"FleetName"`
	NextToken *string `json:"NextToken,omitempty"`
}
