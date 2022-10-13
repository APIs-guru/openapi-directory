package shared

import (
	"time"
)

type PolicyGeneration struct {
	CompletedOn  *time.Time    `json:"completedOn"`
	JobID        string        `json:"jobId"`
	PrincipalArn string        `json:"principalArn"`
	StartedOn    time.Time     `json:"startedOn"`
	Status       JobStatusEnum `json:"status"`
}
