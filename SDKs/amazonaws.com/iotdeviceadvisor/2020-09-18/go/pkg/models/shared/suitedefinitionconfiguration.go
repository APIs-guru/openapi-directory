package shared

type SuiteDefinitionConfiguration struct {
	DevicePermissionRoleArn  *string           `json:"devicePermissionRoleArn"`
	Devices                  []DeviceUnderTest `json:"devices"`
	IntendedForQualification *bool             `json:"intendedForQualification"`
	RootGroup                *string           `json:"rootGroup"`
	SuiteDefinitionName      *string           `json:"suiteDefinitionName"`
}
