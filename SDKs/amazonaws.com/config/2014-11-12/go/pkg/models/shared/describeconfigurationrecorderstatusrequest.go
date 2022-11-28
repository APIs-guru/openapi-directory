package shared

// DescribeConfigurationRecorderStatusRequest
// The input for the <a>DescribeConfigurationRecorderStatus</a> action.
type DescribeConfigurationRecorderStatusRequest struct {
	ConfigurationRecorderNames []string `json:"ConfigurationRecorderNames,omitempty"`
}
