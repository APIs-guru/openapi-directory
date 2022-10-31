package shared

type EventBridgeDestinationProperties struct {
	ErrorHandlingConfig *ErrorHandlingConfig `json:"errorHandlingConfig,omitempty"`
	Object              string               `json:"object"`
}
