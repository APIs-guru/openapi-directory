package shared

// BatchListObjectParentsResponse
// Represents the output of a <a>ListObjectParents</a> response operation.
type BatchListObjectParentsResponse struct {
	NextToken   *string                            `json:"NextToken,omitempty"`
	ParentLinks []ObjectIdentifierAndLinkNameTuple `json:"ParentLinks,omitempty"`
}
