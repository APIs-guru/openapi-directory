package shared

import (
	"time"
)

type Step struct {
	ArtifactsURL     *string           `json:"artifactsUrl"`
	Context          *string           `json:"context"`
	EndTime          time.Time         `json:"endTime"`
	LogURL           *string           `json:"logUrl"`
	Screenshots      map[string]string `json:"screenshots"`
	StartTime        time.Time         `json:"startTime"`
	Status           JobStatusEnum     `json:"status"`
	StatusReason     *string           `json:"statusReason"`
	StepName         string            `json:"stepName"`
	TestArtifactsURL *string           `json:"testArtifactsUrl"`
	TestConfigURL    *string           `json:"testConfigUrl"`
}
