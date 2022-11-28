package shared

// GrpcRouteMetadataMatchMethod
// An object that represents the match method. Specify one of the match values.
type GrpcRouteMetadataMatchMethod struct {
	Exact  *string     `json:"exact,omitempty"`
	Prefix *string     `json:"prefix,omitempty"`
	Range  *MatchRange `json:"range,omitempty"`
	Regex  *string     `json:"regex,omitempty"`
	Suffix *string     `json:"suffix,omitempty"`
}
