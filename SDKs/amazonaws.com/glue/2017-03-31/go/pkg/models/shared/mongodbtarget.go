package shared



type MongoDbTarget struct {
    ConnectionName *string `json:"ConnectionName,omitempty"`
    Path *string `json:"Path,omitempty"`
    ScanAll *bool `json:"ScanAll,omitempty"`
    
}

