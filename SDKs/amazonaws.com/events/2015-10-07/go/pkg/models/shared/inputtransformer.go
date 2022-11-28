package shared

// InputTransformer
// Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event.
type InputTransformer struct {
	InputPathsMap map[string]string `json:"InputPathsMap,omitempty"`
	InputTemplate string            `json:"InputTemplate"`
}
