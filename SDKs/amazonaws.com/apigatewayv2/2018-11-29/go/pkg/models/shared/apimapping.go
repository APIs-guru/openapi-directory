package shared

type APIMapping struct {
	APIID         string  `json:"ApiId"`
	APIMappingID  *string `json:"ApiMappingId"`
	APIMappingKey *string `json:"ApiMappingKey"`
	Stage         string  `json:"Stage"`
}
