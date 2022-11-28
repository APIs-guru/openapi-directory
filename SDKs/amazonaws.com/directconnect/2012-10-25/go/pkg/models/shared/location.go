package shared

// Location
// Information about an Direct Connect location.
type Location struct {
	AvailableMacSecPortSpeeds []string `json:"availableMacSecPortSpeeds,omitempty"`
	AvailablePortSpeeds       []string `json:"availablePortSpeeds,omitempty"`
	AvailableProviders        []string `json:"availableProviders,omitempty"`
	LocationCode              *string  `json:"locationCode,omitempty"`
	LocationName              *string  `json:"locationName,omitempty"`
	Region                    *string  `json:"region,omitempty"`
}
