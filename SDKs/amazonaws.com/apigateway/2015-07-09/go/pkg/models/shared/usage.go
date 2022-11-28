package shared

// Usage
// <p>Represents the usage data of a usage plan.</p> <div class="remarks"/> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-usage-plans-with-console.html#api-gateway-usage-plan-manage-usage">Manage Usage in a Usage Plan</a> </div>
type Usage struct {
	EndDate     *string              `json:"endDate,omitempty"`
	Items       map[string][][]int64 `json:"items,omitempty"`
	Position    *string              `json:"position,omitempty"`
	StartDate   *string              `json:"startDate,omitempty"`
	UsagePlanID *string              `json:"usagePlanId,omitempty"`
}
