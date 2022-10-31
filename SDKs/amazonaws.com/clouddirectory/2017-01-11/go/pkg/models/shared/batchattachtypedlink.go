package shared



type BatchAttachTypedLink struct {
    Attributes []AttributeNameAndValue `json:"Attributes"`
    SourceObjectReference ObjectReference `json:"SourceObjectReference"`
    TargetObjectReference ObjectReference `json:"TargetObjectReference"`
    TypedLinkFacet TypedLinkSchemaAndFacetName `json:"TypedLinkFacet"`
    
}

