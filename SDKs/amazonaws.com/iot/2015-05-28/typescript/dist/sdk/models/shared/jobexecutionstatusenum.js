export var JobExecutionStatusEnum;
(function (JobExecutionStatusEnum) {
    JobExecutionStatusEnum["Queued"] = "QUEUED";
    JobExecutionStatusEnum["InProgress"] = "IN_PROGRESS";
    JobExecutionStatusEnum["Succeeded"] = "SUCCEEDED";
    JobExecutionStatusEnum["Failed"] = "FAILED";
    JobExecutionStatusEnum["TimedOut"] = "TIMED_OUT";
    JobExecutionStatusEnum["Rejected"] = "REJECTED";
    JobExecutionStatusEnum["Removed"] = "REMOVED";
    JobExecutionStatusEnum["Canceled"] = "CANCELED";
})(JobExecutionStatusEnum || (JobExecutionStatusEnum = {}));
