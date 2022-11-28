package shared

// RefreshPreferences
// Describes the preferences for an instance refresh.
type RefreshPreferences struct {
	CheckpointDelay       *int64
	CheckpointPercentages []int64
	InstanceWarmup        *int64
	MinHealthyPercentage  *int64
	SkipMatching          *bool
}
