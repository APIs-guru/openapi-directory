package shared

type BatchListPolicyAttachmentsResponse struct {
	NextToken         *string  `json:"NextToken"`
	ObjectIdentifiers []string `json:"ObjectIdentifiers"`
}
