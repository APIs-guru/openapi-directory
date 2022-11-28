package shared

// ScheduleRunTest
// Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>.
type ScheduleRunTest struct {
	Filter         *string           `json:"filter,omitempty"`
	Parameters     map[string]string `json:"parameters,omitempty"`
	TestPackageArn *string           `json:"testPackageArn,omitempty"`
	TestSpecArn    *string           `json:"testSpecArn,omitempty"`
	Type           TestTypeEnum      `json:"type"`
}
