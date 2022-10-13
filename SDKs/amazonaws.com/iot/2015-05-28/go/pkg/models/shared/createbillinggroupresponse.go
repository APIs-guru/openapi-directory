package shared

type CreateBillingGroupResponse struct {
	BillingGroupArn  *string `json:"billingGroupArn"`
	BillingGroupID   *string `json:"billingGroupId"`
	BillingGroupName *string `json:"billingGroupName"`
}
