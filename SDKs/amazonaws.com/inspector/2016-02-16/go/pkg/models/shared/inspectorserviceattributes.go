package shared

// InspectorServiceAttributes
// This data type is used in the <a>Finding</a> data type.
type InspectorServiceAttributes struct {
	AssessmentRunArn *string `json:"assessmentRunArn,omitempty"`
	RulesPackageArn  *string `json:"rulesPackageArn,omitempty"`
	SchemaVersion    int64   `json:"schemaVersion"`
}
