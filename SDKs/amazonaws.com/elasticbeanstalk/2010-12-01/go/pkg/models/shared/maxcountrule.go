package shared

// MaxCountRule
// A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.
type MaxCountRule struct {
	DeleteSourceFromS3 *bool
	Enabled            bool
	MaxCount           *int64
}
