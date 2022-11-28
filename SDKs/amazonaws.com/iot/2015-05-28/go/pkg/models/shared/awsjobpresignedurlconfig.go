package shared

// AwsJobPresignedURLConfig
// Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP.
type AwsJobPresignedURLConfig struct {
	ExpiresInSec *int64 `json:"expiresInSec,omitempty"`
}
