package shared

import (
	"time"
)

type PipelineMetadata struct {
	Created     *time.Time `json:"created"`
	PipelineArn *string    `json:"pipelineArn"`
	Updated     *time.Time `json:"updated"`
}
