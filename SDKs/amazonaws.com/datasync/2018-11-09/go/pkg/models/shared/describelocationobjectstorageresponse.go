package shared

import (
"time")

type DescribeLocationObjectStorageResponse struct {
    AccessKey *string `json:"AccessKey,omitempty"`
    AgentArns []string `json:"AgentArns,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    LocationArn *string `json:"LocationArn,omitempty"`
    LocationURI *string `json:"LocationUri,omitempty"`
    ServerPort *int64 `json:"ServerPort,omitempty"`
    ServerProtocol *ObjectStorageServerProtocolEnum `json:"ServerProtocol,omitempty"`
    
}

