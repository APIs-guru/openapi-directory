package shared

type DataRepositoryTaskFilter struct {
	Name   *DataRepositoryTaskFilterNameEnum `json:"Name,omitempty"`
	Values []string                          `json:"Values,omitempty"`
}
