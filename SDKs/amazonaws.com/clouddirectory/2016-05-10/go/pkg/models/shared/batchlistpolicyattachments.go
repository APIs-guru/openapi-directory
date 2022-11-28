package shared

// BatchListPolicyAttachments
// Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>.
type BatchListPolicyAttachments struct {
	MaxResults      *int64          `json:"MaxResults,omitempty"`
	NextToken       *string         `json:"NextToken,omitempty"`
	PolicyReference ObjectReference `json:"PolicyReference"`
}
