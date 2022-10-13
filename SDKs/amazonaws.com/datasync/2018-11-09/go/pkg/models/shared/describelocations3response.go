package shared

import (
	"time"
)

type DescribeLocationS3Response struct {
	AgentArns      []string            `json:"AgentArns"`
	CreationTime   *time.Time          `json:"CreationTime"`
	LocationArn    *string             `json:"LocationArn"`
	LocationURI    *string             `json:"LocationUri"`
	S3Config       *S3Config           `json:"S3Config"`
	S3StorageClass *S3StorageClassEnum `json:"S3StorageClass"`
}
