package shared

import (
	"time"
)

type ContactData struct {
	ContactID         *string            `json:"contactId"`
	ContactStatus     *ContactStatusEnum `json:"contactStatus"`
	EndTime           *time.Time         `json:"endTime"`
	ErrorMessage      *string            `json:"errorMessage"`
	GroundStation     *string            `json:"groundStation"`
	MaximumElevation  *Elevation         `json:"maximumElevation"`
	MissionProfileArn *string            `json:"missionProfileArn"`
	PostPassEndTime   *time.Time         `json:"postPassEndTime"`
	PrePassStartTime  *time.Time         `json:"prePassStartTime"`
	Region            *string            `json:"region"`
	SatelliteArn      *string            `json:"satelliteArn"`
	StartTime         *time.Time         `json:"startTime"`
	Tags              map[string]string  `json:"tags"`
}
