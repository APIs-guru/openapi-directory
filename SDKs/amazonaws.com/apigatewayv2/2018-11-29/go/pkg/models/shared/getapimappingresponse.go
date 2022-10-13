package shared

type GetAPIMappingResponse struct {
	APIID         *string `json:"ApiId"`
	APIMappingID  *string `json:"ApiMappingId"`
	APIMappingKey *string `json:"ApiMappingKey"`
	Stage         *string `json:"Stage"`
}
