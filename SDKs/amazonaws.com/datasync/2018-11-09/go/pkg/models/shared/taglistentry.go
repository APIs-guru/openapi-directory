package shared

type TagListEntry struct {
	Key   string  `json:"Key"`
	Value *string `json:"Value,omitempty"`
}
