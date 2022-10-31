package shared



type BatchGetLinkAttributes struct {
    AttributeNames []string `json:"AttributeNames"`
    TypedLinkSpecifier TypedLinkSpecifier `json:"TypedLinkSpecifier"`
    
}

