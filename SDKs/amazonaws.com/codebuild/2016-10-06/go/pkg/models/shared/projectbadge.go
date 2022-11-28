package shared

// ProjectBadge
// Information about the build badge for the build project.
type ProjectBadge struct {
	BadgeEnabled    *bool   `json:"badgeEnabled,omitempty"`
	BadgeRequestURL *string `json:"badgeRequestUrl,omitempty"`
}
