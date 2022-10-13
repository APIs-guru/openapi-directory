package shared

type InspectorServiceAttributes struct {
	AssessmentRunArn *string `json:"assessmentRunArn"`
	RulesPackageArn  *string `json:"rulesPackageArn"`
	SchemaVersion    int64   `json:"schemaVersion"`
}
