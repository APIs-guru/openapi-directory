package shared

type GetMappingRequest struct {
	Location *Location      `json:"Location,omitempty"`
	Sinks    []CatalogEntry `json:"Sinks,omitempty"`
	Source   CatalogEntry   `json:"Source"`
}
