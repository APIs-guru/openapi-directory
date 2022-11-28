package shared

// ComponentParameter
// Contains a key/value pair that sets the named component parameter.
type ComponentParameter struct {
	Name  string   `json:"name"`
	Value []string `json:"value"`
}
