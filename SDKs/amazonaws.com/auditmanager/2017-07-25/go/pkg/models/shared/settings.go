package shared

// Settings
//
//	The settings object that holds all supported Audit Manager settings.
type Settings struct {
	DefaultAssessmentReportsDestination *AssessmentReportsDestination `json:"defaultAssessmentReportsDestination,omitempty"`
	DefaultProcessOwners                []Role                        `json:"defaultProcessOwners,omitempty"`
	IsAwsOrgEnabled                     *bool                         `json:"isAwsOrgEnabled,omitempty"`
	KmsKey                              *string                       `json:"kmsKey,omitempty"`
	SnsTopic                            *string                       `json:"snsTopic,omitempty"`
}
