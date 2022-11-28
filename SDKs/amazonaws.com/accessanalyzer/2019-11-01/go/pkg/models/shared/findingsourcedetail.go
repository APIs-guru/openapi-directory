package shared

// FindingSourceDetail
// Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.
type FindingSourceDetail struct {
	AccessPointArn *string `json:"accessPointArn,omitempty"`
}
