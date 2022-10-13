package shared

import (
	"time"
)

type Directory struct {
	CreationDateTime *time.Time          `json:"CreationDateTime"`
	DirectoryArn     *string             `json:"DirectoryArn"`
	Name             *string             `json:"Name"`
	State            *DirectoryStateEnum `json:"State"`
}
