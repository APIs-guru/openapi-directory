package shared

// Attachment
// An object representing a container instance or task attachment.
type Attachment struct {
	Details []KeyValuePair `json:"details,omitempty"`
	ID      *string        `json:"id,omitempty"`
	Status  *string        `json:"status,omitempty"`
	Type    *string        `json:"type,omitempty"`
}
