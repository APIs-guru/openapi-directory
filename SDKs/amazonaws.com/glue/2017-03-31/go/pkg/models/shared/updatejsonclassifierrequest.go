package shared

type UpdateJSONClassifierRequest struct {
	JSONPath *string `json:"JsonPath"`
	Name     string  `json:"Name"`
}
