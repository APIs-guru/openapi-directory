package shared

type BasePathMapping struct {
	BasePath  *string `json:"basePath"`
	RestAPIID *string `json:"restApiId"`
	Stage     *string `json:"stage"`
}
