package shared

// KeySchema
// The KeySchema identifies the primary key as a one attribute primary key (hash) or a composite two attribute (hash-and-range) primary key. Single attribute primary keys have one index value: a <code>HashKeyElement</code>. A composite hash-and-range primary key contains two attribute values: a <code>HashKeyElement</code> and a <code>RangeKeyElement</code>.
type KeySchema struct {
	HashKeyElement  KeySchemaElement  `json:"HashKeyElement"`
	RangeKeyElement *KeySchemaElement `json:"RangeKeyElement,omitempty"`
}
