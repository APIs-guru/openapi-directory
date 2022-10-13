package shared

type DescribeThingResponse struct {
	Attributes       map[string]string `json:"attributes"`
	BillingGroupName *string           `json:"billingGroupName"`
	DefaultClientID  *string           `json:"defaultClientId"`
	ThingArn         *string           `json:"thingArn"`
	ThingID          *string           `json:"thingId"`
	ThingName        *string           `json:"thingName"`
	ThingTypeName    *string           `json:"thingTypeName"`
	Version          *int64            `json:"version"`
}
