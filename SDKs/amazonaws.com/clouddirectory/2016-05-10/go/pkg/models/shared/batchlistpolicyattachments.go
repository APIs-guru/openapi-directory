package shared

type BatchListPolicyAttachments struct {
	MaxResults      *int64          `json:"MaxResults"`
	NextToken       *string         `json:"NextToken"`
	PolicyReference ObjectReference `json:"PolicyReference"`
}
