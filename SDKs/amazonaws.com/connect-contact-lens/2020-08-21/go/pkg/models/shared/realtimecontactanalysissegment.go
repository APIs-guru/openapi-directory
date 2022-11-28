package shared

// RealtimeContactAnalysisSegment
// An analyzed segment for a real-time analysis session.
type RealtimeContactAnalysisSegment struct {
	Categories *Categories `json:"Categories,omitempty"`
	Transcript *Transcript `json:"Transcript,omitempty"`
}
