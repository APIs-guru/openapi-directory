package shared

type Target struct {
	Arn                         string                       `json:"Arn"`
	BatchParameters             *BatchParameters             `json:"BatchParameters,omitempty"`
	DeadLetterConfig            *DeadLetterConfig            `json:"DeadLetterConfig,omitempty"`
	EcsParameters               *EcsParameters               `json:"EcsParameters,omitempty"`
	HTTPParameters              *HTTPParameters              `json:"HttpParameters,omitempty"`
	ID                          string                       `json:"Id"`
	Input                       *string                      `json:"Input,omitempty"`
	InputPath                   *string                      `json:"InputPath,omitempty"`
	InputTransformer            *InputTransformer            `json:"InputTransformer,omitempty"`
	KinesisParameters           *KinesisParameters           `json:"KinesisParameters,omitempty"`
	RedshiftDataParameters      *RedshiftDataParameters      `json:"RedshiftDataParameters,omitempty"`
	RetryPolicy                 *RetryPolicy                 `json:"RetryPolicy,omitempty"`
	RoleArn                     *string                      `json:"RoleArn,omitempty"`
	RunCommandParameters        *RunCommandParameters        `json:"RunCommandParameters,omitempty"`
	SageMakerPipelineParameters *SageMakerPipelineParameters `json:"SageMakerPipelineParameters,omitempty"`
	SqsParameters               *SqsParameters               `json:"SqsParameters,omitempty"`
}
