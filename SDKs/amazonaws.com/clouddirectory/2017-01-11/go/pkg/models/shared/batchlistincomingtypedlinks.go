package shared

type BatchListIncomingTypedLinks struct {
	FilterAttributeRanges []TypedLinkAttributeRange    `json:"FilterAttributeRanges"`
	FilterTypedLink       *TypedLinkSchemaAndFacetName `json:"FilterTypedLink"`
	MaxResults            *int64                       `json:"MaxResults"`
	NextToken             *string                      `json:"NextToken"`
	ObjectReference       ObjectReference              `json:"ObjectReference"`
}
