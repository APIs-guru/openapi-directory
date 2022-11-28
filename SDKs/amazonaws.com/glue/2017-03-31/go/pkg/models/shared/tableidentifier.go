package shared

// TableIdentifier
// A structure that describes a target table for resource linking.
type TableIdentifier struct {
	CatalogID    *string `json:"CatalogId,omitempty"`
	DatabaseName *string `json:"DatabaseName,omitempty"`
	Name         *string `json:"Name,omitempty"`
}
