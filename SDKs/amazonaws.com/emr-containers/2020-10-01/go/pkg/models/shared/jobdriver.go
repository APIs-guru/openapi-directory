package shared

// JobDriver
// Specify the driver that the job runs on.
type JobDriver struct {
	SparkSubmitJobDriver *SparkSubmitJobDriver `json:"sparkSubmitJobDriver,omitempty"`
}
