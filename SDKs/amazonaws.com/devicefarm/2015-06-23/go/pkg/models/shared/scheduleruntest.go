package shared

type ScheduleRunTest struct {
	Filter         *string           `json:"filter,omitempty"`
	Parameters     map[string]string `json:"parameters,omitempty"`
	TestPackageArn *string           `json:"testPackageArn,omitempty"`
	TestSpecArn    *string           `json:"testSpecArn,omitempty"`
	Type           TestTypeEnum      `json:"type"`
}
