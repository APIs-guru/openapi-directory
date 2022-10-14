package shared

type InspectorServiceAttributes struct {
	AssessmentRunArn *string `json:"assessmentRunArn,omitempty"`
	RulesPackageArn  *string `json:"rulesPackageArn,omitempty"`
	SchemaVersion    int64   `json:"schemaVersion"`
}
