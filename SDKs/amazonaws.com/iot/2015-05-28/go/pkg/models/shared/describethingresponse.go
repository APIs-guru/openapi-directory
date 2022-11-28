package shared

// DescribeThingResponse
// The output from the DescribeThing operation.
type DescribeThingResponse struct {
	Attributes       map[string]string `json:"attributes,omitempty"`
	BillingGroupName *string           `json:"billingGroupName,omitempty"`
	DefaultClientID  *string           `json:"defaultClientId,omitempty"`
	ThingArn         *string           `json:"thingArn,omitempty"`
	ThingID          *string           `json:"thingId,omitempty"`
	ThingName        *string           `json:"thingName,omitempty"`
	ThingTypeName    *string           `json:"thingTypeName,omitempty"`
	Version          *int64            `json:"version,omitempty"`
}
