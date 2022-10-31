package shared



type UpdateRadiusRequest struct {
    DirectoryID string `json:"DirectoryId"`
    RadiusSettings RadiusSettings `json:"RadiusSettings"`
    
}

