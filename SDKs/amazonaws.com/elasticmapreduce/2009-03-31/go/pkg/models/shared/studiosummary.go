package shared

import (
	"time"
)

type StudioSummary struct {
	AuthMode     *AuthModeEnum `json:"AuthMode"`
	CreationTime *time.Time    `json:"CreationTime"`
	Description  *string       `json:"Description"`
	Name         *string       `json:"Name"`
	StudioID     *string       `json:"StudioId"`
	URL          *string       `json:"Url"`
	VpcID        *string       `json:"VpcId"`
}
