package shared

// BatchGetLinkAttributes
// Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.
type BatchGetLinkAttributes struct {
	AttributeNames     []string           `json:"AttributeNames"`
	TypedLinkSpecifier TypedLinkSpecifier `json:"TypedLinkSpecifier"`
}
