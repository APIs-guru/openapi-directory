package shared

import (
	"time"
)

// DescribeLocationS3Response
// DescribeLocationS3Response
type DescribeLocationS3Response struct {
	AgentArns      []string            `json:"AgentArns,omitempty"`
	CreationTime   *time.Time          `json:"CreationTime,omitempty"`
	LocationArn    *string             `json:"LocationArn,omitempty"`
	LocationURI    *string             `json:"LocationUri,omitempty"`
	S3Config       *S3Config           `json:"S3Config,omitempty"`
	S3StorageClass *S3StorageClassEnum `json:"S3StorageClass,omitempty"`
}
