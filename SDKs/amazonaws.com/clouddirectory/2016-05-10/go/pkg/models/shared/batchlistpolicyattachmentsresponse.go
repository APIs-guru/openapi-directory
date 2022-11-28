package shared

// BatchListPolicyAttachmentsResponse
// Represents the output of a <a>ListPolicyAttachments</a> response operation.
type BatchListPolicyAttachmentsResponse struct {
	NextToken         *string  `json:"NextToken,omitempty"`
	ObjectIdentifiers []string `json:"ObjectIdentifiers,omitempty"`
}
