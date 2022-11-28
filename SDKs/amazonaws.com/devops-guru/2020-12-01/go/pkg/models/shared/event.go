package shared

import (
	"time"
)

// Event
//
//	An AWS resource event. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.
type Event struct {
	DataSource         *EventDataSourceEnum `json:"DataSource,omitempty"`
	EventClass         *EventClassEnum      `json:"EventClass,omitempty"`
	EventSource        *string              `json:"EventSource,omitempty"`
	ID                 *string              `json:"Id,omitempty"`
	Name               *string              `json:"Name,omitempty"`
	ResourceCollection *ResourceCollection  `json:"ResourceCollection,omitempty"`
	Resources          []EventResource      `json:"Resources,omitempty"`
	Time               *time.Time           `json:"Time,omitempty"`
}
