package shared

import (
	"time"
)

type Event struct {
	DataSource         *EventDataSourceEnum `json:"DataSource"`
	EventClass         *EventClassEnum      `json:"EventClass"`
	EventSource        *string              `json:"EventSource"`
	ID                 *string              `json:"Id"`
	Name               *string              `json:"Name"`
	ResourceCollection *ResourceCollection  `json:"ResourceCollection"`
	Resources          []EventResource      `json:"Resources"`
	Time               *time.Time           `json:"Time"`
}
