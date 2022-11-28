package shared

// RecommendationPreferences
// Describes preferences for recommendations.
type RecommendationPreferences struct {
	CPUVendorArchitectures []CPUVendorArchitectureEnum `json:"cpuVendorArchitectures,omitempty"`
}
