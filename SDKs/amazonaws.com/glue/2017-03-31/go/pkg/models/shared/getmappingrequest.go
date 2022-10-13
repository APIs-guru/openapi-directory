package shared

type GetMappingRequest struct {
	Location *Location      `json:"Location"`
	Sinks    []CatalogEntry `json:"Sinks"`
	Source   CatalogEntry   `json:"Source"`
}
