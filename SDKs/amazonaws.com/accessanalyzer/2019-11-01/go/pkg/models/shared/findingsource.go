package shared

// FindingSource
// The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.
type FindingSource struct {
	Detail *FindingSourceDetail  `json:"detail,omitempty"`
	Type   FindingSourceTypeEnum `json:"type"`
}
