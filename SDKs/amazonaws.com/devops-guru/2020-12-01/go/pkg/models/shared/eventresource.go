package shared

// EventResource
//
//	The AWS resource that emitted an event. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.
type EventResource struct {
	Arn  *string `json:"Arn,omitempty"`
	Name *string `json:"Name,omitempty"`
	Type *string `json:"Type,omitempty"`
}
