package shared

import (
	"time"
)

// Directory
// Directory structure that includes the directory name and directory ARN.
type Directory struct {
	CreationDateTime *time.Time          `json:"CreationDateTime,omitempty"`
	DirectoryArn     *string             `json:"DirectoryArn,omitempty"`
	Name             *string             `json:"Name,omitempty"`
	State            *DirectoryStateEnum `json:"State,omitempty"`
}
