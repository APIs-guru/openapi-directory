package shared

// BatchListIncomingTypedLinks
// Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.
type BatchListIncomingTypedLinks struct {
	FilterAttributeRanges []TypedLinkAttributeRange    `json:"FilterAttributeRanges,omitempty"`
	FilterTypedLink       *TypedLinkSchemaAndFacetName `json:"FilterTypedLink,omitempty"`
	MaxResults            *int64                       `json:"MaxResults,omitempty"`
	NextToken             *string                      `json:"NextToken,omitempty"`
	ObjectReference       ObjectReference              `json:"ObjectReference"`
}
