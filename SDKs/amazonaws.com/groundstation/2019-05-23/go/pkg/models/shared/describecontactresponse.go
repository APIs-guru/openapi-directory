package shared

import (
	"time"
)

type DescribeContactResponse struct {
	ContactID         *string            `json:"contactId,omitempty"`
	ContactStatus     *ContactStatusEnum `json:"contactStatus,omitempty"`
	DataflowList      []DataflowDetail   `json:"dataflowList,omitempty"`
	EndTime           *time.Time         `json:"endTime,omitempty"`
	ErrorMessage      *string            `json:"errorMessage,omitempty"`
	GroundStation     *string            `json:"groundStation,omitempty"`
	MaximumElevation  *Elevation         `json:"maximumElevation,omitempty"`
	MissionProfileArn *string            `json:"missionProfileArn,omitempty"`
	PostPassEndTime   *time.Time         `json:"postPassEndTime,omitempty"`
	PrePassStartTime  *time.Time         `json:"prePassStartTime,omitempty"`
	Region            *string            `json:"region,omitempty"`
	SatelliteArn      *string            `json:"satelliteArn,omitempty"`
	StartTime         *time.Time         `json:"startTime,omitempty"`
	Tags              map[string]string  `json:"tags,omitempty"`
}
