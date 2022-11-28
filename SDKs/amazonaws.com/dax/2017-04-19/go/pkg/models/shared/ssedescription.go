package shared

// SseDescription
// The description of the server-side encryption status on the specified DAX cluster.
type SseDescription struct {
	Status *SseStatusEnum `json:"Status,omitempty"`
}
