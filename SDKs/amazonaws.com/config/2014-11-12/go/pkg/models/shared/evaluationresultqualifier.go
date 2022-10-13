package shared

type EvaluationResultQualifier struct {
	ConfigRuleName *string `json:"ConfigRuleName"`
	ResourceID     *string `json:"ResourceId"`
	ResourceType   *string `json:"ResourceType"`
}
