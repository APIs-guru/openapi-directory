package shared

type ListBillingGroupsResponse struct {
	BillingGroups []GroupNameAndArn `json:"billingGroups"`
	NextToken     *string           `json:"nextToken"`
}
