package shared

// Pipeline
// The pipeline (queue) that is used to manage jobs.
type Pipeline struct {
	Arn             *string               `json:"Arn,omitempty"`
	AwsKmsKeyArn    *string               `json:"AwsKmsKeyArn,omitempty"`
	ContentConfig   *PipelineOutputConfig `json:"ContentConfig,omitempty"`
	ID              *string               `json:"Id,omitempty"`
	InputBucket     *string               `json:"InputBucket,omitempty"`
	Name            *string               `json:"Name,omitempty"`
	Notifications   *Notifications        `json:"Notifications,omitempty"`
	OutputBucket    *string               `json:"OutputBucket,omitempty"`
	Role            *string               `json:"Role,omitempty"`
	Status          *string               `json:"Status,omitempty"`
	ThumbnailConfig *PipelineOutputConfig `json:"ThumbnailConfig,omitempty"`
}
