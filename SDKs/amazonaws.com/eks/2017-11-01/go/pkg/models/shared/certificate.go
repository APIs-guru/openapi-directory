package shared

// Certificate
// An object representing the <code>certificate-authority-data</code> for your cluster.
type Certificate struct {
	Data *string `json:"data,omitempty"`
}
