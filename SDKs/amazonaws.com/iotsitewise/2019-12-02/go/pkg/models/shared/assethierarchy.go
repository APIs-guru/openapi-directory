package shared

// AssetHierarchy
// Describes an asset hierarchy that contains a hierarchy's name and ID.
type AssetHierarchy struct {
	ID   *string `json:"id,omitempty"`
	Name string  `json:"name"`
}
