package shared

import (
"time")

type Script struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    Name *string `json:"Name,omitempty"`
    ScriptArn *string `json:"ScriptArn,omitempty"`
    ScriptID *string `json:"ScriptId,omitempty"`
    SizeOnDisk *int64 `json:"SizeOnDisk,omitempty"`
    StorageLocation *S3Location `json:"StorageLocation,omitempty"`
    Version *string `json:"Version,omitempty"`
    
}

