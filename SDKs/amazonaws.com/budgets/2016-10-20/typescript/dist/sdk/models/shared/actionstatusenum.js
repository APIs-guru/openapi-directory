export var ActionStatusEnum;
(function (ActionStatusEnum) {
    ActionStatusEnum["Standby"] = "STANDBY";
    ActionStatusEnum["Pending"] = "PENDING";
    ActionStatusEnum["ExecutionInProgress"] = "EXECUTION_IN_PROGRESS";
    ActionStatusEnum["ExecutionSuccess"] = "EXECUTION_SUCCESS";
    ActionStatusEnum["ExecutionFailure"] = "EXECUTION_FAILURE";
    ActionStatusEnum["ReverseInProgress"] = "REVERSE_IN_PROGRESS";
    ActionStatusEnum["ReverseSuccess"] = "REVERSE_SUCCESS";
    ActionStatusEnum["ReverseFailure"] = "REVERSE_FAILURE";
    ActionStatusEnum["ResetInProgress"] = "RESET_IN_PROGRESS";
    ActionStatusEnum["ResetFailure"] = "RESET_FAILURE";
})(ActionStatusEnum || (ActionStatusEnum = {}));
