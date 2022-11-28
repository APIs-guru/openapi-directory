package shared

// SseSpecification
// Represents the settings used to enable server-side encryption.
type SseSpecification struct {
	Enabled        *bool        `json:"Enabled,omitempty"`
	KmsMasterKeyID *string      `json:"KMSMasterKeyId,omitempty"`
	SseType        *SseTypeEnum `json:"SSEType,omitempty"`
}
