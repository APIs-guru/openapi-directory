package shared

import (
	"time"
)

// KeyGroup
// <p>A key group.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
type KeyGroup struct {
	ID               string
	KeyGroupConfig   KeyGroupConfig
	LastModifiedTime time.Time
}
