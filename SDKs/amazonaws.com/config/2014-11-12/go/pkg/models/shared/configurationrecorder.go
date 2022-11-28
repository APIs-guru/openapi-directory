package shared

// ConfigurationRecorder
// An object that represents the recording of configuration changes of an Amazon Web Services resource.
type ConfigurationRecorder struct {
	Name           *string         `json:"name,omitempty"`
	RecordingGroup *RecordingGroup `json:"recordingGroup,omitempty"`
	RoleArn        *string         `json:"roleARN,omitempty"`
}
