package shared

type ListCustomRoutingListenersRequest struct {
	AcceleratorArn string  `json:"AcceleratorArn"`
	MaxResults     *int64  `json:"MaxResults"`
	NextToken      *string `json:"NextToken"`
}
