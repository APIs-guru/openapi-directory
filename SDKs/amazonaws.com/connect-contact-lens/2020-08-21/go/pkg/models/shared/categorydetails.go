package shared

// CategoryDetails
// Provides information about the category rule that was matched.
type CategoryDetails struct {
	PointsOfInterest []PointOfInterest `json:"PointsOfInterest"`
}
