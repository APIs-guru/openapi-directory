package shared

// HTTPPathMatch
// An object representing the path to match in the request.
type HTTPPathMatch struct {
	Exact *string `json:"exact,omitempty"`
	Regex *string `json:"regex,omitempty"`
}
