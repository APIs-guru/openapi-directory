package shared

type ProjectBadge struct {
	BadgeEnabled    *bool   `json:"badgeEnabled,omitempty"`
	BadgeRequestURL *string `json:"badgeRequestUrl,omitempty"`
}
