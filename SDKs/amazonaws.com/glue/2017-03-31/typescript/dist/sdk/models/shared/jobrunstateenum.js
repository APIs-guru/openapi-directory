export var JobRunStateEnum;
(function (JobRunStateEnum) {
    JobRunStateEnum["Starting"] = "STARTING";
    JobRunStateEnum["Running"] = "RUNNING";
    JobRunStateEnum["Stopping"] = "STOPPING";
    JobRunStateEnum["Stopped"] = "STOPPED";
    JobRunStateEnum["Succeeded"] = "SUCCEEDED";
    JobRunStateEnum["Failed"] = "FAILED";
    JobRunStateEnum["Timeout"] = "TIMEOUT";
})(JobRunStateEnum || (JobRunStateEnum = {}));
