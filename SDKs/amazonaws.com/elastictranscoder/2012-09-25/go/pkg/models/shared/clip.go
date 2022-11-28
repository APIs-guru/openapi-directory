package shared

// Clip
// Settings for one clip in a composition. All jobs in a playlist must have the same clip settings.
type Clip struct {
	TimeSpan *TimeSpan `json:"TimeSpan,omitempty"`
}
