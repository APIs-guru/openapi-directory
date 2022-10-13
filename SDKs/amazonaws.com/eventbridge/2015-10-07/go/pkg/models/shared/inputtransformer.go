package shared

type InputTransformer struct {
	InputPathsMap map[string]string `json:"InputPathsMap"`
	InputTemplate string            `json:"InputTemplate"`
}
