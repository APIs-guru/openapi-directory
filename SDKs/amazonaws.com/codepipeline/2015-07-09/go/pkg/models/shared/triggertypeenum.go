package shared

type TriggerTypeEnum string

const (
	TriggerTypeEnumCreatePipeline         TriggerTypeEnum = "CreatePipeline"
	TriggerTypeEnumStartPipelineExecution TriggerTypeEnum = "StartPipelineExecution"
	TriggerTypeEnumPollForSourceChanges   TriggerTypeEnum = "PollForSourceChanges"
	TriggerTypeEnumWebhook                TriggerTypeEnum = "Webhook"
	TriggerTypeEnumCloudWatchEvent        TriggerTypeEnum = "CloudWatchEvent"
	TriggerTypeEnumPutActionRevision      TriggerTypeEnum = "PutActionRevision"
)
