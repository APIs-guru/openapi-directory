package shared

type PutResourcePolicyRequest struct {
	EnableHybrid          *EnableHybridValuesEnum `json:"EnableHybrid"`
	PolicyExistsCondition *ExistConditionEnum     `json:"PolicyExistsCondition"`
	PolicyHashCondition   *string                 `json:"PolicyHashCondition"`
	PolicyInJSON          string                  `json:"PolicyInJson"`
	ResourceArn           *string                 `json:"ResourceArn"`
}
