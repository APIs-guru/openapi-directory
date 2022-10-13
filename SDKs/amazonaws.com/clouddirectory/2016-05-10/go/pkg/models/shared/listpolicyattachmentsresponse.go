package shared

type ListPolicyAttachmentsResponse struct {
	NextToken         *string  `json:"NextToken"`
	ObjectIdentifiers []string `json:"ObjectIdentifiers"`
}
