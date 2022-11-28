package shared

// Key
// The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash) primary key or a two attribute (hash-and-range) primary key.
type Key struct {
	HashKeyElement  AttributeValue  `json:"HashKeyElement"`
	RangeKeyElement *AttributeValue `json:"RangeKeyElement,omitempty"`
}
