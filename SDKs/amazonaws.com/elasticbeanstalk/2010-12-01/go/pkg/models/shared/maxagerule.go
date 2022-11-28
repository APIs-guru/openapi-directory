package shared

// MaxAgeRule
// A lifecycle rule that deletes application versions after the specified number of days.
type MaxAgeRule struct {
	DeleteSourceFromS3 *bool
	Enabled            bool
	MaxAgeInDays       *int64
}
