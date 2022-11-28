package shared

// DataflowDetail
// Information about a dataflow edge used in a contact.
type DataflowDetail struct {
	Destination  *Destination `json:"destination,omitempty"`
	ErrorMessage *string      `json:"errorMessage,omitempty"`
	Source       *Source      `json:"source,omitempty"`
}
