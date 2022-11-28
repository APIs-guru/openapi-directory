package shared

// UpdateRadiusRequest
// Contains the inputs for the <a>UpdateRadius</a> operation.
type UpdateRadiusRequest struct {
	DirectoryID    string         `json:"DirectoryId"`
	RadiusSettings RadiusSettings `json:"RadiusSettings"`
}
