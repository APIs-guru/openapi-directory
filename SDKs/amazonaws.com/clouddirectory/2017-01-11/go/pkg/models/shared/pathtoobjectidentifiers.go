package shared

// PathToObjectIdentifiers
// Returns the path to the <code>ObjectIdentifiers</code> that is associated with the directory.
type PathToObjectIdentifiers struct {
	ObjectIdentifiers []string `json:"ObjectIdentifiers,omitempty"`
	Path              *string  `json:"Path,omitempty"`
}
