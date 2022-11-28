package shared

// Scope
// Defines which resources trigger an evaluation for an Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration.
type Scope struct {
	ComplianceResourceID    *string  `json:"ComplianceResourceId,omitempty"`
	ComplianceResourceTypes []string `json:"ComplianceResourceTypes,omitempty"`
	TagKey                  *string  `json:"TagKey,omitempty"`
	TagValue                *string  `json:"TagValue,omitempty"`
}
