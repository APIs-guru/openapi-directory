package shared

type BasePathMapping struct {
	BasePath  *string `json:"basePath,omitempty"`
	RestAPIID *string `json:"restApiId,omitempty"`
	Stage     *string `json:"stage,omitempty"`
}
