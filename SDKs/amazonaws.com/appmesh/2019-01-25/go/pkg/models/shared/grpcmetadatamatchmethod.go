package shared

// GrpcMetadataMatchMethod
// An object representing the method header to be matched.
type GrpcMetadataMatchMethod struct {
	Exact  *string     `json:"exact,omitempty"`
	Prefix *string     `json:"prefix,omitempty"`
	Range  *MatchRange `json:"range,omitempty"`
	Regex  *string     `json:"regex,omitempty"`
	Suffix *string     `json:"suffix,omitempty"`
}
