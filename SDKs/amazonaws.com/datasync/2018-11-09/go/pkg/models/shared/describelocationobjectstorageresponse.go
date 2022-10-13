package shared

import (
	"time"
)

type DescribeLocationObjectStorageResponse struct {
	AccessKey      *string                          `json:"AccessKey"`
	AgentArns      []string                         `json:"AgentArns"`
	CreationTime   *time.Time                       `json:"CreationTime"`
	LocationArn    *string                          `json:"LocationArn"`
	LocationURI    *string                          `json:"LocationUri"`
	ServerPort     *int64                           `json:"ServerPort"`
	ServerProtocol *ObjectStorageServerProtocolEnum `json:"ServerProtocol"`
}
