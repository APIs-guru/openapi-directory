package shared

type Settings struct {
	DefaultAssessmentReportsDestination *AssessmentReportsDestination `json:"defaultAssessmentReportsDestination,omitempty"`
	DefaultProcessOwners                []Role                        `json:"defaultProcessOwners,omitempty"`
	IsAwsOrgEnabled                     *bool                         `json:"isAwsOrgEnabled,omitempty"`
	KmsKey                              *string                       `json:"kmsKey,omitempty"`
	SnsTopic                            *string                       `json:"snsTopic,omitempty"`
}
