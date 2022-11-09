export var JobStatusEnum;
(function (JobStatusEnum) {
    JobStatusEnum["Pending"] = "pending";
    JobStatusEnum["Running"] = "running";
    JobStatusEnum["Incomplete"] = "incomplete";
    JobStatusEnum["Failed"] = "failed";
    JobStatusEnum["Succeeded"] = "succeeded";
    JobStatusEnum["Cancelled"] = "cancelled";
})(JobStatusEnum || (JobStatusEnum = {}));
