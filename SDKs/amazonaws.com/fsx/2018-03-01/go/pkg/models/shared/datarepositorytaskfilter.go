package shared

type DataRepositoryTaskFilter struct {
	Name   *DataRepositoryTaskFilterNameEnum `json:"Name"`
	Values []string                          `json:"Values"`
}
