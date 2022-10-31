package shared

type RegionsInfo struct {
	AdditionalRegions []string `json:"AdditionalRegions,omitempty"`
	PrimaryRegion     *string  `json:"PrimaryRegion,omitempty"`
}
