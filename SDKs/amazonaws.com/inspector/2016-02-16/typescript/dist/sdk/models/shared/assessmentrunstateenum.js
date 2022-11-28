export var AssessmentRunStateEnum;
(function (AssessmentRunStateEnum) {
    AssessmentRunStateEnum["Created"] = "CREATED";
    AssessmentRunStateEnum["StartDataCollectionPending"] = "START_DATA_COLLECTION_PENDING";
    AssessmentRunStateEnum["StartDataCollectionInProgress"] = "START_DATA_COLLECTION_IN_PROGRESS";
    AssessmentRunStateEnum["CollectingData"] = "COLLECTING_DATA";
    AssessmentRunStateEnum["StopDataCollectionPending"] = "STOP_DATA_COLLECTION_PENDING";
    AssessmentRunStateEnum["DataCollected"] = "DATA_COLLECTED";
    AssessmentRunStateEnum["StartEvaluatingRulesPending"] = "START_EVALUATING_RULES_PENDING";
    AssessmentRunStateEnum["EvaluatingRules"] = "EVALUATING_RULES";
    AssessmentRunStateEnum["Failed"] = "FAILED";
    AssessmentRunStateEnum["Error"] = "ERROR";
    AssessmentRunStateEnum["Completed"] = "COMPLETED";
    AssessmentRunStateEnum["CompletedWithErrors"] = "COMPLETED_WITH_ERRORS";
    AssessmentRunStateEnum["Canceled"] = "CANCELED";
})(AssessmentRunStateEnum || (AssessmentRunStateEnum = {}));
