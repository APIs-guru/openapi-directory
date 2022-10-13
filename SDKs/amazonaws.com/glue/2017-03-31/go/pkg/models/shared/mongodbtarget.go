package shared

type MongoDbTarget struct {
	ConnectionName *string `json:"ConnectionName"`
	Path           *string `json:"Path"`
	ScanAll        *bool   `json:"ScanAll"`
}
