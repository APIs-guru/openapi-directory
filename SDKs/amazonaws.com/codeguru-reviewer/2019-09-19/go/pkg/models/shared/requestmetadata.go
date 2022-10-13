package shared

type RequestMetadata struct {
	EventInfo  *EventInfo      `json:"EventInfo"`
	RequestID  *string         `json:"RequestId"`
	Requester  *string         `json:"Requester"`
	VendorName *VendorNameEnum `json:"VendorName"`
}
