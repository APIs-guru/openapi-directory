package shared

// DeviceFilter
// <p>Represents a device filter used to select a set of devices to be included in a test run. This data structure is passed in as the <code>deviceSelectionConfiguration</code> parameter to <code>ScheduleRun</code>. For an example of the JSON request syntax, see <a>ScheduleRun</a>.</p> <p>It is also passed in as the <code>filters</code> parameter to <code>ListDevices</code>. For an example of the JSON request syntax, see <a>ListDevices</a>.</p>
type DeviceFilter struct {
	Attribute DeviceFilterAttributeEnum `json:"attribute"`
	Operator  RuleOperatorEnum          `json:"operator"`
	Values    []string                  `json:"values"`
}
