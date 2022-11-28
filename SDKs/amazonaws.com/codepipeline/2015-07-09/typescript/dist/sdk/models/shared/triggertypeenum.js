export var TriggerTypeEnum;
(function (TriggerTypeEnum) {
    TriggerTypeEnum["CreatePipeline"] = "CreatePipeline";
    TriggerTypeEnum["StartPipelineExecution"] = "StartPipelineExecution";
    TriggerTypeEnum["PollForSourceChanges"] = "PollForSourceChanges";
    TriggerTypeEnum["Webhook"] = "Webhook";
    TriggerTypeEnum["CloudWatchEvent"] = "CloudWatchEvent";
    TriggerTypeEnum["PutActionRevision"] = "PutActionRevision";
})(TriggerTypeEnum || (TriggerTypeEnum = {}));
