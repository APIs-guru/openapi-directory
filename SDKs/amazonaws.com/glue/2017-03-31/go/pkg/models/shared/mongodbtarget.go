package shared

// MongoDbTarget
// Specifies an Amazon DocumentDB or MongoDB data store to crawl.
type MongoDbTarget struct {
	ConnectionName *string `json:"ConnectionName,omitempty"`
	Path           *string `json:"Path,omitempty"`
	ScanAll        *bool   `json:"ScanAll,omitempty"`
}
