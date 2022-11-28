package shared

// DiscoveredResource
// Object representing the on-premises resource being migrated.
type DiscoveredResource struct {
	ConfigurationID string  `json:"ConfigurationId"`
	Description     *string `json:"Description,omitempty"`
}
