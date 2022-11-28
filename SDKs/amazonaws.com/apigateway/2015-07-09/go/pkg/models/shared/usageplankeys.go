package shared

// UsagePlanKeys
// <p>Represents the collection of usage plan keys added to usage plans for the associated API keys and, possibly, other types of keys.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
type UsagePlanKeys struct {
	Items    []UsagePlanKey `json:"items,omitempty"`
	Position *string        `json:"position,omitempty"`
}
