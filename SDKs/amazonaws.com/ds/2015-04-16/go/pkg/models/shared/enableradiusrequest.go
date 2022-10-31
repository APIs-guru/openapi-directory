package shared

type EnableRadiusRequest struct {
	DirectoryID    string         `json:"DirectoryId"`
	RadiusSettings RadiusSettings `json:"RadiusSettings"`
}
