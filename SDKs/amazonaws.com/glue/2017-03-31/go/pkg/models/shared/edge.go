package shared

// Edge
// An edge represents a directed connection between two components on a workflow graph.
type Edge struct {
	DestinationID *string `json:"DestinationId,omitempty"`
	SourceID      *string `json:"SourceId,omitempty"`
}
