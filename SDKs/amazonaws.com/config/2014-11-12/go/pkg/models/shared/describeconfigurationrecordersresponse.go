package shared

// DescribeConfigurationRecordersResponse
// The output for the <a>DescribeConfigurationRecorders</a> action.
type DescribeConfigurationRecordersResponse struct {
	ConfigurationRecorders []ConfigurationRecorder `json:"ConfigurationRecorders,omitempty"`
}
