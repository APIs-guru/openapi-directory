package shared

type ValidateSecurityProfileBehaviorsResponse struct {
	Valid            *bool             `json:"valid"`
	ValidationErrors []ValidationError `json:"validationErrors"`
}
