package shared

type DescribeBillingGroupResponse struct {
	BillingGroupArn        *string                 `json:"billingGroupArn,omitempty"`
	BillingGroupID         *string                 `json:"billingGroupId,omitempty"`
	BillingGroupMetadata   *BillingGroupMetadata   `json:"billingGroupMetadata,omitempty"`
	BillingGroupName       *string                 `json:"billingGroupName,omitempty"`
	BillingGroupProperties *BillingGroupProperties `json:"billingGroupProperties,omitempty"`
	Version                *int64                  `json:"version,omitempty"`
}
