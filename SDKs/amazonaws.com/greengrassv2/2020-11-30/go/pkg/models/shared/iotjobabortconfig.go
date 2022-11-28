package shared

// IoTJobAbortConfig
// Contains a list of criteria that define when and how to cancel a configuration deployment.
type IoTJobAbortConfig struct {
	CriteriaList []IoTJobAbortCriteria `json:"criteriaList"`
}
