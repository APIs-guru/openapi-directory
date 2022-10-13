package shared

type Target struct {
	Arn                         string                       `json:"Arn"`
	BatchParameters             *BatchParameters             `json:"BatchParameters"`
	DeadLetterConfig            *DeadLetterConfig            `json:"DeadLetterConfig"`
	EcsParameters               *EcsParameters               `json:"EcsParameters"`
	HTTPParameters              *HTTPParameters              `json:"HttpParameters"`
	ID                          string                       `json:"Id"`
	Input                       *string                      `json:"Input"`
	InputPath                   *string                      `json:"InputPath"`
	InputTransformer            *InputTransformer            `json:"InputTransformer"`
	KinesisParameters           *KinesisParameters           `json:"KinesisParameters"`
	RedshiftDataParameters      *RedshiftDataParameters      `json:"RedshiftDataParameters"`
	RetryPolicy                 *RetryPolicy                 `json:"RetryPolicy"`
	RoleArn                     *string                      `json:"RoleArn"`
	RunCommandParameters        *RunCommandParameters        `json:"RunCommandParameters"`
	SageMakerPipelineParameters *SageMakerPipelineParameters `json:"SageMakerPipelineParameters"`
	SqsParameters               *SqsParameters               `json:"SqsParameters"`
}
