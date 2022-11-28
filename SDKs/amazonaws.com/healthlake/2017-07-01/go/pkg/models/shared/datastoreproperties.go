package shared

import (
	"time"
)

// DatastoreProperties
// Displays the properties of the Data Store, including the ID, Arn, name, and the status of the Data Store.
type DatastoreProperties struct {
	CreatedAt            *time.Time          `json:"CreatedAt,omitempty"`
	DatastoreArn         string              `json:"DatastoreArn"`
	DatastoreEndpoint    string              `json:"DatastoreEndpoint"`
	DatastoreID          string              `json:"DatastoreId"`
	DatastoreName        *string             `json:"DatastoreName,omitempty"`
	DatastoreStatus      DatastoreStatusEnum `json:"DatastoreStatus"`
	DatastoreTypeVersion FhirVersionEnum     `json:"DatastoreTypeVersion"`
	PreloadDataConfig    *PreloadDataConfig  `json:"PreloadDataConfig,omitempty"`
	SseConfiguration     *SseConfiguration   `json:"SseConfiguration,omitempty"`
}
