package shared



type BatchListOutgoingTypedLinks struct {
    FilterAttributeRanges []TypedLinkAttributeRange `json:"FilterAttributeRanges,omitempty"`
    FilterTypedLink *TypedLinkSchemaAndFacetName `json:"FilterTypedLink,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ObjectReference ObjectReference `json:"ObjectReference"`
    
}

