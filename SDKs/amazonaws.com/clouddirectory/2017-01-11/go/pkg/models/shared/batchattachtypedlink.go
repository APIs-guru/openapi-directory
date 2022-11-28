package shared

// BatchAttachTypedLink
// Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
type BatchAttachTypedLink struct {
	Attributes            []AttributeNameAndValue     `json:"Attributes"`
	SourceObjectReference ObjectReference             `json:"SourceObjectReference"`
	TargetObjectReference ObjectReference             `json:"TargetObjectReference"`
	TypedLinkFacet        TypedLinkSchemaAndFacetName `json:"TypedLinkFacet"`
}
