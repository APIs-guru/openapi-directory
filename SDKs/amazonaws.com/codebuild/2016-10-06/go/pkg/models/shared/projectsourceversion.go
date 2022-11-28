package shared

// ProjectSourceVersion
//
//	A source identifier and its corresponding version.
type ProjectSourceVersion struct {
	SourceIdentifier string `json:"sourceIdentifier"`
	SourceVersion    string `json:"sourceVersion"`
}
