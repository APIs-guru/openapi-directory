package shared

type EnrollmentFilter struct {
	Name   *EnrollmentFilterNameEnum `json:"name"`
	Values []string                  `json:"values"`
}
