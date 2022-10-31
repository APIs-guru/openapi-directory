package shared

type APIPagedResponseAPIModelsUser struct {
	Entities []APIModelsUser          `json:"Entities"`
	Metadata APIPagedResponseMetadata `json:"Metadata"`
}
