package shared

type APIMapping struct {
	APIID         string  `json:"ApiId"`
	APIMappingID  *string `json:"ApiMappingId,omitempty"`
	APIMappingKey *string `json:"ApiMappingKey,omitempty"`
	Stage         string  `json:"Stage"`
}
