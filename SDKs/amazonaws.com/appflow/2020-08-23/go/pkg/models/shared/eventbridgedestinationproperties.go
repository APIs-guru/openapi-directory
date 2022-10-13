package shared

type EventBridgeDestinationProperties struct {
	ErrorHandlingConfig *ErrorHandlingConfig `json:"errorHandlingConfig"`
	Object              string               `json:"object"`
}
