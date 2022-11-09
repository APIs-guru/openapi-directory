export var StatusEnum;
(function (StatusEnum) {
    StatusEnum["Pass"] = "PASS";
    StatusEnum["Fail"] = "FAIL";
    StatusEnum["Canceled"] = "CANCELED";
    StatusEnum["Pending"] = "PENDING";
    StatusEnum["Running"] = "RUNNING";
    StatusEnum["Stopping"] = "STOPPING";
    StatusEnum["Stopped"] = "STOPPED";
    StatusEnum["PassWithWarnings"] = "PASS_WITH_WARNINGS";
    StatusEnum["Error"] = "ERROR";
})(StatusEnum || (StatusEnum = {}));
