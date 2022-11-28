export var ExecutionStatusEnum;
(function (ExecutionStatusEnum) {
    ExecutionStatusEnum["Pending"] = "PENDING";
    ExecutionStatusEnum["PendingConcurrency"] = "PENDING_CONCURRENCY";
    ExecutionStatusEnum["PendingDevice"] = "PENDING_DEVICE";
    ExecutionStatusEnum["Processing"] = "PROCESSING";
    ExecutionStatusEnum["Scheduling"] = "SCHEDULING";
    ExecutionStatusEnum["Preparing"] = "PREPARING";
    ExecutionStatusEnum["Running"] = "RUNNING";
    ExecutionStatusEnum["Completed"] = "COMPLETED";
    ExecutionStatusEnum["Stopping"] = "STOPPING";
})(ExecutionStatusEnum || (ExecutionStatusEnum = {}));
