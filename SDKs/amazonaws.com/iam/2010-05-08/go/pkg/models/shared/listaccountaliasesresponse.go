package shared

// ListAccountAliasesResponse
// Contains the response to a successful <a>ListAccountAliases</a> request.
type ListAccountAliasesResponse struct {
	AccountAliases []string
	IsTruncated    *bool
	Marker         *string
}
