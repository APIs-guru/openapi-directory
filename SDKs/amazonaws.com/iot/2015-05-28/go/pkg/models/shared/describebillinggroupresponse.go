package shared

type DescribeBillingGroupResponse struct {
	BillingGroupArn        *string                 `json:"billingGroupArn"`
	BillingGroupID         *string                 `json:"billingGroupId"`
	BillingGroupMetadata   *BillingGroupMetadata   `json:"billingGroupMetadata"`
	BillingGroupName       *string                 `json:"billingGroupName"`
	BillingGroupProperties *BillingGroupProperties `json:"billingGroupProperties"`
	Version                *int64                  `json:"version"`
}
