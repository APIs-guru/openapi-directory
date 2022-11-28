package shared

// HoneycodeDestinationProperties
//
//	The properties that are applied when Amazon Honeycode is used as a destination.
type HoneycodeDestinationProperties struct {
	ErrorHandlingConfig *ErrorHandlingConfig `json:"errorHandlingConfig,omitempty"`
	Object              string               `json:"object"`
}
