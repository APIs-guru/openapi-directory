package shared

// HeaderMatchMethod
// An object that represents the method and value to match with the header value sent in a request. Specify one match method.
type HeaderMatchMethod struct {
	Exact  *string     `json:"exact,omitempty"`
	Prefix *string     `json:"prefix,omitempty"`
	Range  *MatchRange `json:"range,omitempty"`
	Regex  *string     `json:"regex,omitempty"`
	Suffix *string     `json:"suffix,omitempty"`
}
