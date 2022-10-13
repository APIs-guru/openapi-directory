package shared

type UsagePlan struct {
	APIStages   []APIStage        `json:"apiStages"`
	Description *string           `json:"description"`
	ID          *string           `json:"id"`
	Name        *string           `json:"name"`
	ProductCode *string           `json:"productCode"`
	Quota       *QuotaSettings    `json:"quota"`
	Tags        map[string]string `json:"tags"`
	Throttle    *ThrottleSettings `json:"throttle"`
}
