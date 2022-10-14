package shared

type SuiteDefinitionConfiguration struct {
	DevicePermissionRoleArn  *string           `json:"devicePermissionRoleArn,omitempty"`
	Devices                  []DeviceUnderTest `json:"devices,omitempty"`
	IntendedForQualification *bool             `json:"intendedForQualification,omitempty"`
	RootGroup                *string           `json:"rootGroup,omitempty"`
	SuiteDefinitionName      *string           `json:"suiteDefinitionName,omitempty"`
}
