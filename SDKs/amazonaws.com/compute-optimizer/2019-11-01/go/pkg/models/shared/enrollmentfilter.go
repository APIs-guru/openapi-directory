package shared

// EnrollmentFilter
// Describes a filter that returns a more specific list of account enrollment statuses. Use this filter with the <a>GetEnrollmentStatusesForOrganization</a> action.
type EnrollmentFilter struct {
	Name   *EnrollmentFilterNameEnum `json:"name,omitempty"`
	Values []string                  `json:"values,omitempty"`
}
