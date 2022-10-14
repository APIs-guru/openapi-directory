package shared

type ListPartnerEventSourcesRequest struct {
	Limit      *int64  `json:"Limit,omitempty"`
	NamePrefix string  `json:"NamePrefix"`
	NextToken  *string `json:"NextToken,omitempty"`
}
