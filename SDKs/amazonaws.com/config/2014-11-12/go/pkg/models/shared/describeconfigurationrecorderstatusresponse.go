package shared

// DescribeConfigurationRecorderStatusResponse
// The output for the <a>DescribeConfigurationRecorderStatus</a> action, in JSON format.
type DescribeConfigurationRecorderStatusResponse struct {
	ConfigurationRecordersStatus []ConfigurationRecorderStatus `json:"ConfigurationRecordersStatus,omitempty"`
}
