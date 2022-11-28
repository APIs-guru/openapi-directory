package shared

// UsagePlans
// <p>Represents a collection of usage plans for an AWS account.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
type UsagePlans struct {
	Items    []UsagePlan `json:"items,omitempty"`
	Position *string     `json:"position,omitempty"`
}
