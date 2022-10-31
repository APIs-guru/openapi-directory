package shared

type BatchListPolicyAttachmentsResponse struct {
	NextToken         *string  `json:"NextToken,omitempty"`
	ObjectIdentifiers []string `json:"ObjectIdentifiers,omitempty"`
}
