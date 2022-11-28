package shared

// DatabaseIdentifier
// A structure that describes a target database for resource linking.
type DatabaseIdentifier struct {
	CatalogID    *string `json:"CatalogId,omitempty"`
	DatabaseName *string `json:"DatabaseName,omitempty"`
}
