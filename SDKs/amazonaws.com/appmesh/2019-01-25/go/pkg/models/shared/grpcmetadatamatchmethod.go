package shared

type GrpcMetadataMatchMethod struct {
	Exact  *string     `json:"exact"`
	Prefix *string     `json:"prefix"`
	Range  *MatchRange `json:"range"`
	Regex  *string     `json:"regex"`
	Suffix *string     `json:"suffix"`
}
