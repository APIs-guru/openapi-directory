package shared

type Settings struct {
	DefaultAssessmentReportsDestination *AssessmentReportsDestination `json:"defaultAssessmentReportsDestination"`
	DefaultProcessOwners                []Role                        `json:"defaultProcessOwners"`
	IsAwsOrgEnabled                     *bool                         `json:"isAwsOrgEnabled"`
	KmsKey                              *string                       `json:"kmsKey"`
	SnsTopic                            *string                       `json:"snsTopic"`
}
