export var BatchStateEnum;
(function (BatchStateEnum) {
    BatchStateEnum["Submitted"] = "submitted";
    BatchStateEnum["Active"] = "active";
    BatchStateEnum["Cancelled"] = "cancelled";
    BatchStateEnum["Failed"] = "failed";
    BatchStateEnum["CancelledRunning"] = "cancelled_running";
    BatchStateEnum["CancelledTerminating"] = "cancelled_terminating";
    BatchStateEnum["Modifying"] = "modifying";
})(BatchStateEnum || (BatchStateEnum = {}));
