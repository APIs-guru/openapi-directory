package shared



type EnrollmentFilter struct {
    Name *EnrollmentFilterNameEnum `json:"name,omitempty"`
    Values []string `json:"values,omitempty"`
    
}

