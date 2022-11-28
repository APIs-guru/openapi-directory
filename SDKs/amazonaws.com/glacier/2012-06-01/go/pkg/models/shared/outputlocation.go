package shared

// OutputLocation
// Contains information about the location where the select job results are stored.
type OutputLocation struct {
	S3 *S3Location `json:"S3,omitempty"`
}
