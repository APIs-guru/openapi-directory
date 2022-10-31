package shared

type RequestMetadata struct {
	EventInfo  *EventInfo      `json:"EventInfo,omitempty"`
	RequestID  *string         `json:"RequestId,omitempty"`
	Requester  *string         `json:"Requester,omitempty"`
	VendorName *VendorNameEnum `json:"VendorName,omitempty"`
}
