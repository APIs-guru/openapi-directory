package shared

type ListAssociatedFleetsRequest struct {
	NextToken *string `json:"NextToken"`
	StackName string  `json:"StackName"`
}
