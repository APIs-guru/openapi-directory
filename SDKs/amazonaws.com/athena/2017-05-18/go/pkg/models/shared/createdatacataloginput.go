package shared

type CreateDataCatalogInput struct {
	Description *string             `json:"Description"`
	Name        string              `json:"Name"`
	Parameters  map[string]string   `json:"Parameters"`
	Tags        []Tag               `json:"Tags"`
	Type        DataCatalogTypeEnum `json:"Type"`
}
