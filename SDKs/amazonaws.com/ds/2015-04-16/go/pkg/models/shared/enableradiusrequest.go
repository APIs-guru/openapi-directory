package shared

// EnableRadiusRequest
// Contains the inputs for the <a>EnableRadius</a> operation.
type EnableRadiusRequest struct {
	DirectoryID    string         `json:"DirectoryId"`
	RadiusSettings RadiusSettings `json:"RadiusSettings"`
}
