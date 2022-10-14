package shared

type FindingSource struct {
	Detail *FindingSourceDetail  `json:"detail,omitempty"`
	Type   FindingSourceTypeEnum `json:"type"`
}
