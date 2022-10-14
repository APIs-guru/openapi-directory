package shared

type ValidateSecurityProfileBehaviorsResponse struct {
	Valid            *bool             `json:"valid,omitempty"`
	ValidationErrors []ValidationError `json:"validationErrors,omitempty"`
}
