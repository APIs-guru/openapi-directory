package shared

type SseSpecification struct {
	Enabled        *bool        `json:"Enabled"`
	KmsMasterKeyID *string      `json:"KMSMasterKeyId"`
	SseType        *SseTypeEnum `json:"SSEType"`
}
