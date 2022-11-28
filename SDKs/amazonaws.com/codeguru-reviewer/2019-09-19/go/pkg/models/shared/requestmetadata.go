package shared

// RequestMetadata
// Metadata that is associated with a code review. This applies to both pull request and repository analysis code reviews.
type RequestMetadata struct {
	EventInfo  *EventInfo      `json:"EventInfo,omitempty"`
	RequestID  *string         `json:"RequestId,omitempty"`
	Requester  *string         `json:"Requester,omitempty"`
	VendorName *VendorNameEnum `json:"VendorName,omitempty"`
}
