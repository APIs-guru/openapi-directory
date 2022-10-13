package shared

type AdvancedFieldSelector struct {
	EndsWith      []string `json:"EndsWith"`
	Equals        []string `json:"Equals"`
	Field         string   `json:"Field"`
	NotEndsWith   []string `json:"NotEndsWith"`
	NotEquals     []string `json:"NotEquals"`
	NotStartsWith []string `json:"NotStartsWith"`
	StartsWith    []string `json:"StartsWith"`
}
