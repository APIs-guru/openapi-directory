package shared

// PresignedURLConfig
// Configuration for pre-signed S3 URLs.
type PresignedURLConfig struct {
	ExpiresInSec *int64  `json:"expiresInSec,omitempty"`
	RoleArn      *string `json:"roleArn,omitempty"`
}
