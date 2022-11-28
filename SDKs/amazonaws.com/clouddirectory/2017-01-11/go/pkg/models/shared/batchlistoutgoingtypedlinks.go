package shared

// BatchListOutgoingTypedLinks
// Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.
type BatchListOutgoingTypedLinks struct {
	FilterAttributeRanges []TypedLinkAttributeRange    `json:"FilterAttributeRanges,omitempty"`
	FilterTypedLink       *TypedLinkSchemaAndFacetName `json:"FilterTypedLink,omitempty"`
	MaxResults            *int64                       `json:"MaxResults,omitempty"`
	NextToken             *string                      `json:"NextToken,omitempty"`
	ObjectReference       ObjectReference              `json:"ObjectReference"`
}
