package shared

type FindingSource struct {
	Detail *FindingSourceDetail  `json:"detail"`
	Type   FindingSourceTypeEnum `json:"type"`
}
