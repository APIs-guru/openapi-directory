package shared

import (
	"time"
)

// Script
// <p>Properties describing a Realtime script.</p> <p> <b>Related actions</b> </p> <p> <a>CreateScript</a> | <a>ListScripts</a> | <a>DescribeScript</a> | <a>UpdateScript</a> | <a>DeleteScript</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
type Script struct {
	CreationTime    *time.Time  `json:"CreationTime,omitempty"`
	Name            *string     `json:"Name,omitempty"`
	ScriptArn       *string     `json:"ScriptArn,omitempty"`
	ScriptID        *string     `json:"ScriptId,omitempty"`
	SizeOnDisk      *int64      `json:"SizeOnDisk,omitempty"`
	StorageLocation *S3Location `json:"StorageLocation,omitempty"`
	Version         *string     `json:"Version,omitempty"`
}
