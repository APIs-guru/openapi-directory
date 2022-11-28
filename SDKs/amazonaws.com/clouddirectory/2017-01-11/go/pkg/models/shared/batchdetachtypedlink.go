package shared

// BatchDetachTypedLink
// Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
type BatchDetachTypedLink struct {
	TypedLinkSpecifier TypedLinkSpecifier `json:"TypedLinkSpecifier"`
}
