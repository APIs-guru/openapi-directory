package shared

type RestApis struct {
	Items    []RestAPI `json:"items"`
	Position *string   `json:"position"`
}
