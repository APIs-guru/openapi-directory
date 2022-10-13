package shared

type ConfigurationRecorder struct {
	Name           *string         `json:"name"`
	RecordingGroup *RecordingGroup `json:"recordingGroup"`
	RoleArn        *string         `json:"roleARN"`
}
