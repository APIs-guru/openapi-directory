package shared

type Location struct {
	AvailableMacSecPortSpeeds []string `json:"availableMacSecPortSpeeds"`
	AvailablePortSpeeds       []string `json:"availablePortSpeeds"`
	AvailableProviders        []string `json:"availableProviders"`
	LocationCode              *string  `json:"locationCode"`
	LocationName              *string  `json:"locationName"`
	Region                    *string  `json:"region"`
}
