package shared

import (
	"time"
)

type DatastoreProperties struct {
	CreatedAt            *time.Time          `json:"CreatedAt"`
	DatastoreArn         string              `json:"DatastoreArn"`
	DatastoreEndpoint    string              `json:"DatastoreEndpoint"`
	DatastoreID          string              `json:"DatastoreId"`
	DatastoreName        *string             `json:"DatastoreName"`
	DatastoreStatus      DatastoreStatusEnum `json:"DatastoreStatus"`
	DatastoreTypeVersion FhirVersionEnum     `json:"DatastoreTypeVersion"`
	PreloadDataConfig    *PreloadDataConfig  `json:"PreloadDataConfig"`
	SseConfiguration     *SseConfiguration   `json:"SseConfiguration"`
}
