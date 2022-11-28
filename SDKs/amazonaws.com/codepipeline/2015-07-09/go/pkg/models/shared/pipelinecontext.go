package shared

// PipelineContext
// <p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note>
type PipelineContext struct {
	Action              *ActionContext `json:"action,omitempty"`
	PipelineArn         *string        `json:"pipelineArn,omitempty"`
	PipelineExecutionID *string        `json:"pipelineExecutionId,omitempty"`
	PipelineName        *string        `json:"pipelineName,omitempty"`
	Stage               *StageContext  `json:"stage,omitempty"`
}
