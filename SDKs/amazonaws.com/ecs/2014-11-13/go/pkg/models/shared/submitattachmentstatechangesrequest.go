package shared

type SubmitAttachmentStateChangesRequest struct {
	Attachments []AttachmentStateChange `json:"attachments"`
	Cluster     *string                 `json:"cluster,omitempty"`
}
