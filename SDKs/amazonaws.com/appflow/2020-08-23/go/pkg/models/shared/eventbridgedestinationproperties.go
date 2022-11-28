package shared

// EventBridgeDestinationProperties
//
//	The properties that are applied when Amazon EventBridge is being used as a destination.
type EventBridgeDestinationProperties struct {
	ErrorHandlingConfig *ErrorHandlingConfig `json:"errorHandlingConfig,omitempty"`
	Object              string               `json:"object"`
}
