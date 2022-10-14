package shared

type CreateAPIMappingResponse struct {
	APIID         *string `json:"ApiId,omitempty"`
	APIMappingID  *string `json:"ApiMappingId,omitempty"`
	APIMappingKey *string `json:"ApiMappingKey,omitempty"`
	Stage         *string `json:"Stage,omitempty"`
}
