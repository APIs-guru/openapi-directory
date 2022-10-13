package shared

type UpdateDataCatalogInput struct {
	Description *string             `json:"Description"`
	Name        string              `json:"Name"`
	Parameters  map[string]string   `json:"Parameters"`
	Type        DataCatalogTypeEnum `json:"Type"`
}
