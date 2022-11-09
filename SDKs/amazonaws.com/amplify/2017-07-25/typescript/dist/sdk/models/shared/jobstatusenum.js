export var JobStatusEnum;
(function (JobStatusEnum) {
    JobStatusEnum["Pending"] = "PENDING";
    JobStatusEnum["Provisioning"] = "PROVISIONING";
    JobStatusEnum["Running"] = "RUNNING";
    JobStatusEnum["Failed"] = "FAILED";
    JobStatusEnum["Succeed"] = "SUCCEED";
    JobStatusEnum["Cancelling"] = "CANCELLING";
    JobStatusEnum["Cancelled"] = "CANCELLED";
})(JobStatusEnum || (JobStatusEnum = {}));
