package shared

// UsagePlan
// <p>Represents a usage plan than can specify who can assess associated API stages with specified request limits and quotas.</p> <div class="remarks"> <p>In a usage plan, you associate an API by specifying the API's Id and a stage name of the specified API. You add plan customers by adding API keys to the plan. </p> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
type UsagePlan struct {
	APIStages   []APIStage        `json:"apiStages,omitempty"`
	Description *string           `json:"description,omitempty"`
	ID          *string           `json:"id,omitempty"`
	Name        *string           `json:"name,omitempty"`
	ProductCode *string           `json:"productCode,omitempty"`
	Quota       *QuotaSettings    `json:"quota,omitempty"`
	Tags        map[string]string `json:"tags,omitempty"`
	Throttle    *ThrottleSettings `json:"throttle,omitempty"`
}
