package shared

import (
	"time"
)

type Script struct {
	CreationTime    *time.Time  `json:"CreationTime"`
	Name            *string     `json:"Name"`
	ScriptArn       *string     `json:"ScriptArn"`
	ScriptID        *string     `json:"ScriptId"`
	SizeOnDisk      *int64      `json:"SizeOnDisk"`
	StorageLocation *S3Location `json:"StorageLocation"`
	Version         *string     `json:"Version"`
}
