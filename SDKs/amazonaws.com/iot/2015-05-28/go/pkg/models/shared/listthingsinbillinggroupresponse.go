package shared

type ListThingsInBillingGroupResponse struct {
	NextToken *string  `json:"nextToken,omitempty"`
	Things    []string `json:"things,omitempty"`
}
