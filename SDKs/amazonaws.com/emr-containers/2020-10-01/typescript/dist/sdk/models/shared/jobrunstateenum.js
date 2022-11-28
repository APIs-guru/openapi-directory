export var JobRunStateEnum;
(function (JobRunStateEnum) {
    JobRunStateEnum["Pending"] = "PENDING";
    JobRunStateEnum["Submitted"] = "SUBMITTED";
    JobRunStateEnum["Running"] = "RUNNING";
    JobRunStateEnum["Failed"] = "FAILED";
    JobRunStateEnum["Cancelled"] = "CANCELLED";
    JobRunStateEnum["CancelPending"] = "CANCEL_PENDING";
    JobRunStateEnum["Completed"] = "COMPLETED";
})(JobRunStateEnum || (JobRunStateEnum = {}));
