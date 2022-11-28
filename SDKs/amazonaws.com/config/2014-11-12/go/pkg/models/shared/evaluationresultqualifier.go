package shared

// EvaluationResultQualifier
// Identifies an Config rule that evaluated an Amazon Web Services resource, and provides the type and ID of the resource that the rule evaluated.
type EvaluationResultQualifier struct {
	ConfigRuleName *string `json:"ConfigRuleName,omitempty"`
	ResourceID     *string `json:"ResourceId,omitempty"`
	ResourceType   *string `json:"ResourceType,omitempty"`
}
