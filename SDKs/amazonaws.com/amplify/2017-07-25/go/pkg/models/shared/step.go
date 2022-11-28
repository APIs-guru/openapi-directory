package shared

import (
	"time"
)

// Step
//
//	Describes an execution step, for an execution job, for an Amplify app.
type Step struct {
	ArtifactsURL     *string           `json:"artifactsUrl,omitempty"`
	Context          *string           `json:"context,omitempty"`
	EndTime          time.Time         `json:"endTime"`
	LogURL           *string           `json:"logUrl,omitempty"`
	Screenshots      map[string]string `json:"screenshots,omitempty"`
	StartTime        time.Time         `json:"startTime"`
	Status           JobStatusEnum     `json:"status"`
	StatusReason     *string           `json:"statusReason,omitempty"`
	StepName         string            `json:"stepName"`
	TestArtifactsURL *string           `json:"testArtifactsUrl,omitempty"`
	TestConfigURL    *string           `json:"testConfigUrl,omitempty"`
}
