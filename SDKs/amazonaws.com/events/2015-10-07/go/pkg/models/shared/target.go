package shared

// Target
// <p>Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be set as a target, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html">PutTargets</a>.</p> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p>
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
