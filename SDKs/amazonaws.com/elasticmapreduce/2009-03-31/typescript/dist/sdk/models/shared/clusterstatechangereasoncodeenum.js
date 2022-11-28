export var ClusterStateChangeReasonCodeEnum;
(function (ClusterStateChangeReasonCodeEnum) {
    ClusterStateChangeReasonCodeEnum["InternalError"] = "INTERNAL_ERROR";
    ClusterStateChangeReasonCodeEnum["ValidationError"] = "VALIDATION_ERROR";
    ClusterStateChangeReasonCodeEnum["InstanceFailure"] = "INSTANCE_FAILURE";
    ClusterStateChangeReasonCodeEnum["InstanceFleetTimeout"] = "INSTANCE_FLEET_TIMEOUT";
    ClusterStateChangeReasonCodeEnum["BootstrapFailure"] = "BOOTSTRAP_FAILURE";
    ClusterStateChangeReasonCodeEnum["UserRequest"] = "USER_REQUEST";
    ClusterStateChangeReasonCodeEnum["StepFailure"] = "STEP_FAILURE";
    ClusterStateChangeReasonCodeEnum["AllStepsCompleted"] = "ALL_STEPS_COMPLETED";
})(ClusterStateChangeReasonCodeEnum || (ClusterStateChangeReasonCodeEnum = {}));
