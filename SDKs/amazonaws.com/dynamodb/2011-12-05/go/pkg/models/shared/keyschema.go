package shared

type KeySchema struct {
	HashKeyElement  KeySchemaElement  `json:"HashKeyElement"`
	RangeKeyElement *KeySchemaElement `json:"RangeKeyElement,omitempty"`
}
