package shared

type ConfigurationRecorder struct {
	Name           *string         `json:"name,omitempty"`
	RecordingGroup *RecordingGroup `json:"recordingGroup,omitempty"`
	RoleArn        *string         `json:"roleARN,omitempty"`
}
