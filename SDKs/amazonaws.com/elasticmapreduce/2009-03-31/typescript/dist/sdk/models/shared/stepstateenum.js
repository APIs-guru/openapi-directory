export var StepStateEnum;
(function (StepStateEnum) {
    StepStateEnum["Pending"] = "PENDING";
    StepStateEnum["CancelPending"] = "CANCEL_PENDING";
    StepStateEnum["Running"] = "RUNNING";
    StepStateEnum["Completed"] = "COMPLETED";
    StepStateEnum["Cancelled"] = "CANCELLED";
    StepStateEnum["Failed"] = "FAILED";
    StepStateEnum["Interrupted"] = "INTERRUPTED";
})(StepStateEnum || (StepStateEnum = {}));
