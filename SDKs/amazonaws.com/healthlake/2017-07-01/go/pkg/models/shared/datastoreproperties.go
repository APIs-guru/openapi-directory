package shared

import (
	"time"
)

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
