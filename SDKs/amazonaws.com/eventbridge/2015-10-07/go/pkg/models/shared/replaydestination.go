package shared

// ReplayDestination
// A <code>ReplayDestination</code> object that contains details about a replay.
type ReplayDestination struct {
	Arn        string   `json:"Arn"`
	FilterArns []string `json:"FilterArns,omitempty"`
}
