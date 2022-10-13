package shared

type ScheduleRunTest struct {
	Filter         *string           `json:"filter"`
	Parameters     map[string]string `json:"parameters"`
	TestPackageArn *string           `json:"testPackageArn"`
	TestSpecArn    *string           `json:"testSpecArn"`
	Type           TestTypeEnum      `json:"type"`
}
