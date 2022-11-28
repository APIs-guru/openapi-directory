package shared

// DescribeConfigurationRecordersRequest
// The input for the <a>DescribeConfigurationRecorders</a> action.
type DescribeConfigurationRecordersRequest struct {
	ConfigurationRecorderNames []string `json:"ConfigurationRecorderNames,omitempty"`
}
