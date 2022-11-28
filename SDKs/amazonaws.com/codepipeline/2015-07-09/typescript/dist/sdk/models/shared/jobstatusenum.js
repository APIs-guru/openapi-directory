export var JobStatusEnum;
(function (JobStatusEnum) {
    JobStatusEnum["Created"] = "Created";
    JobStatusEnum["Queued"] = "Queued";
    JobStatusEnum["Dispatched"] = "Dispatched";
    JobStatusEnum["InProgress"] = "InProgress";
    JobStatusEnum["TimedOut"] = "TimedOut";
    JobStatusEnum["Succeeded"] = "Succeeded";
    JobStatusEnum["Failed"] = "Failed";
})(JobStatusEnum || (JobStatusEnum = {}));
