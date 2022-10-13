package shared

type ListThingsInBillingGroupResponse struct {
	NextToken *string  `json:"nextToken"`
	Things    []string `json:"things"`
}
