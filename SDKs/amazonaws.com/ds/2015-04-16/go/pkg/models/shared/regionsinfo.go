package shared

type RegionsInfo struct {
	AdditionalRegions []string `json:"AdditionalRegions"`
	PrimaryRegion     *string  `json:"PrimaryRegion"`
}
