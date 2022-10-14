package shared

import (
	"time"
)

type PipelineMetadata struct {
	Created     *time.Time `json:"created,omitempty"`
	PipelineArn *string    `json:"pipelineArn,omitempty"`
	Updated     *time.Time `json:"updated,omitempty"`
}
