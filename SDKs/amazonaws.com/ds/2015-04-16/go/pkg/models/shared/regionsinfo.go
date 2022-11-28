package shared

// RegionsInfo
// Provides information about the Regions that are configured for multi-Region replication.
type RegionsInfo struct {
	AdditionalRegions []string `json:"AdditionalRegions,omitempty"`
	PrimaryRegion     *string  `json:"PrimaryRegion,omitempty"`
}
