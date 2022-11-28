export declare enum AssessmentRunStateEnum {
    Created = "CREATED",
    StartDataCollectionPending = "START_DATA_COLLECTION_PENDING",
    StartDataCollectionInProgress = "START_DATA_COLLECTION_IN_PROGRESS",
    CollectingData = "COLLECTING_DATA",
    StopDataCollectionPending = "STOP_DATA_COLLECTION_PENDING",
    DataCollected = "DATA_COLLECTED",
    StartEvaluatingRulesPending = "START_EVALUATING_RULES_PENDING",
    EvaluatingRules = "EVALUATING_RULES",
    Failed = "FAILED",
    Error = "ERROR",
    Completed = "COMPLETED",
    CompletedWithErrors = "COMPLETED_WITH_ERRORS",
    Canceled = "CANCELED"
}
