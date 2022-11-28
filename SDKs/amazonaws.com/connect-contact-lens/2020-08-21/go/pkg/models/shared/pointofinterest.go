package shared

// PointOfInterest
// The section of the contact audio where that category rule was detected.
type PointOfInterest struct {
	BeginOffsetMillis int64 `json:"BeginOffsetMillis"`
	EndOffsetMillis   int64 `json:"EndOffsetMillis"`
}
