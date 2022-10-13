package shared

import (
	"time"
)

type ConfigurationRecorderStatus struct {
	LastErrorCode        *string             `json:"lastErrorCode"`
	LastErrorMessage     *string             `json:"lastErrorMessage"`
	LastStartTime        *time.Time          `json:"lastStartTime"`
	LastStatus           *RecorderStatusEnum `json:"lastStatus"`
	LastStatusChangeTime *time.Time          `json:"lastStatusChangeTime"`
	LastStopTime         *time.Time          `json:"lastStopTime"`
	Name                 *string             `json:"name"`
	Recording            *bool               `json:"recording"`
}
