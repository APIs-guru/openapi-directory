package shared

import (
	"time"
)

// GetStatusOutput
// Output structure for the GetStatus operation.
type GetStatusOutput struct {
	ArtifactList          []Artifact
	Carrier               *string
	CreationDate          *time.Time
	CurrentManifest       *string
	ErrorCount            *int64
	JobID                 *string
	JobType               *JobTypeEnum
	LocationCode          *string
	LocationMessage       *string
	LogBucket             *string
	LogKey                *string
	ProgressCode          *string
	ProgressMessage       *string
	Signature             *string
	SignatureFileContents *string
	TrackingNumber        *string
}
