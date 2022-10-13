package shared

type Pipeline struct {
	Arn             *string               `json:"Arn"`
	AwsKmsKeyArn    *string               `json:"AwsKmsKeyArn"`
	ContentConfig   *PipelineOutputConfig `json:"ContentConfig"`
	ID              *string               `json:"Id"`
	InputBucket     *string               `json:"InputBucket"`
	Name            *string               `json:"Name"`
	Notifications   *Notifications        `json:"Notifications"`
	OutputBucket    *string               `json:"OutputBucket"`
	Role            *string               `json:"Role"`
	Status          *string               `json:"Status"`
	ThumbnailConfig *PipelineOutputConfig `json:"ThumbnailConfig"`
}
